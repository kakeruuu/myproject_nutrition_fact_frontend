import React, { useState } from "react";

export function FoodList({posts}: {posts: any}){
  const keys = Object.keys(posts);
  const [userSelectFoodIds, setUserSelectFoodIds] = useState<number[]>([])
  const [filteringFoodIds, setFilteringFoodId] = useState<object>({})
  const [switchVisible, setSwitchVisible] = useState<boolean>(true)

  // <li>がクリックされるとその値を出力する
  const addFoodIds = (e: any, id: number) => {
    // TODO：ユーザーが選択したIDと削除されたIDが明示的にわかるように変更する
    if (!userSelectFoodIds.includes(id)) {
      setUserSelectFoodIds([...userSelectFoodIds, id])
    } else {
      const index = userSelectFoodIds.indexOf(id)
      userSelectFoodIds.splice(index,1)
    }
  };

  // postからユーザーが選択したfoodIdのみ抽出する
  const filterFoodIds = (e: any, userSelectids: number[]) => {
    setSwitchVisible(false)
    // この処理だとPostsのキー内に存在してユーザーが選択したFoodListの中にはない場合、空の配列が入っているObjectができてしまう？
    // tmpObj = {"砂糖": [{id: 777....},{....}], "にんじん": []} →　にんじんは空の配列しか入っていない
    let tmpObj: {[key: string]: Array<object>} = {}
    keys.map((k: string) => {
      return tmpObj[k] = []
    })
    keys.map((k: string) => 
      // MEMO:APIの処理でPostの値がすべて文字列になっている。
      // TODO:postの要素の型付け方法を考える
      // {"砂糖": [[{"id": "276",...}],"にんじん": [[{"id": "276",...}]}
      tmpObj[k].push(posts[k].filter((p: { id: any; }) => userSelectids.includes(p.id)))
    )
    // 次回：tmpObj内の配列の深さを一つ浅くする
    Object.keys(tmpObj).map((k) => {
      return tmpObj[k].flat(2)
    })
    console.log(tmpObj)
    setFilteringFoodId({...filteringFoodIds, ...tmpObj})
    // objectが代入できていない
    console.log(filteringFoodIds)
  };


  const switchFoodListVisible = (switchVisibleBool: boolean) => {
    if (switchVisibleBool) {
      return keys.map((k, i) => {
        return <ul key={i}>
                  <p>{k}</p>
                  {posts[k].map((p: { id: number, food_name: string; }, idx: number) => {
                    // TODO：クリック時にクリックしたリストであるということがわかる処理を加えたい。
                    return <li key={idx} onClick={(e: any) => addFoodIds(e, p.id)}>{p.food_name}</li>
                  })}
                </ul>
        })
    } else {
      // 1 [[{id: "677", food_name: "test"....},....], [{}]]
      // 2 [{id: "677", food_name: "test"....},....,....] → 現在のfilteringFoodIds 配列が深くなった処理が複雑になったため。
      // 結局,<ul>かつ表示するキーを厳選するなら、1の方がいい？
      // 1の内容をPostsと同じ形式に成型すればTrueの時の処理と同じ処理にまとめられる？
      return Object.keys(filteringFoodIds).map((k, i) => {
          return <ul key={i}>
                    <p>{k}</p>
                    {posts[k].map((p: { id: number, food_name: string; }, idx: number) => {
                      return <li key={idx}>{p.food_name}</li>
                    })}
                  </ul>
          })
      // return filteringFoodIds.map((foodsObject) => {
      //   return Object.keys(foodsObject).map((key, idx) => {
      //     return <li key={idx}>
      //             {key + " : " + foodsObject[key]}
      //             </li>
      //     })
      //   })
    }
  };

  
  return (
    <div>
      {/* 今の状態だとボタンの下にチェックしたlistが表示されてしまうので、className="foodList"にswitchFoodListVisibleを持ってくる */}
      <div className="foodList">
        {switchFoodListVisible(switchVisible)}
      </div>
      <button type="submit" onClick={(e: any) => filterFoodIds(e, userSelectFoodIds)}>送信</button>
    </div>
  )
}
  