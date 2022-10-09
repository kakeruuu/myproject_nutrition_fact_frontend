import React, { useState } from "react";
import { foodLists, foodObject } from "./FoodListType"

// TODO:配列内のオブジェクトに対するデータ型の設定でエラーが頻繁に起きているのでデータ型についてもう少し深く学ぶ
export function FoodList({posts}: {posts: any}){
  const keys: string[] = Object.keys(posts);
  const copyPosts: foodLists = JSON.parse(JSON.stringify(posts))
  
  const [userSelectFoodIds, setUserSelectFoodIds] = useState<number[]>([])
  // MEMO：userSelectFoodsの変数名は要検討
  const [userSelectFoods, setUserSelectFoods] = useState<foodLists>(copyPosts)
  const [switchVisible, setSwitchVisible] = useState<boolean>(true)

  // <li>がクリックされるとその値を出力する
  const addFoodIds = (e: any, id: number) => {
    // TODO：ユーザーが選択したIDと削除されたIDが明示的にわかるように変更する
    if (!userSelectFoodIds.includes(id)) {
      setUserSelectFoodIds([...userSelectFoodIds, id])
    } 
    const index = userSelectFoodIds.indexOf(id)
    userSelectFoodIds.splice(index,1)
  };

  // postからユーザーが選択したfoodIdのみ抽出する
  const filterFoodIds = (e: any, userSelectids: number[]) => {
    setSwitchVisible(false)
    let tmpObj: foodLists = {}
    let tmpAry: Array<foodObject> = []
    Object.keys(userSelectFoods).forEach((k: string) => {
      tmpAry = posts[k].filter((p: {id: number}) => userSelectids.includes(p.id))
      if (tmpAry.length) {tmpObj[k] = tmpAry}
    })
    setUserSelectFoods({...tmpObj})
  };

  // postsとuserSelectFoodsを同一のものにした方が良い？
  const switchFoodListVisible = (switchVisibleBool: boolean) => {
    if (switchVisibleBool) {
      return keys.map((k, i) => {
        return <ul key={i}>
                  <p>{k}</p>
                  {posts[k].map((p: { id: number; food_name: string; }, idx: number) => {
                    // TODO：クリック時にクリックしたリストであるということがわかる処理を加えたい。
                    return <li key={idx} onClick={(e: any) => addFoodIds(e, p.id)}>{p.food_name}</li>
                  })}
                </ul>
        })
    }
    // 1 [[{id: "677", food_name: "test"....},....], [{}]]
    // 2 [{id: "677", food_name: "test"....},....,....] → 現在のuserSelectFoods 配列が深くなった処理が複雑になったため。
    // 結局、<ul>かつ表示するキーを厳選するなら、1の方がいい？
    // 1の内容をPostsと同じ形式に成型すればTrueの時の処理と同じ処理にまとめられる？
    return Object.keys(userSelectFoods).map((k, i) => {
        return <ul key={i}>
                  <p>{k}</p>
                  {/* TODO:pのデータ型を考える */}
                  {userSelectFoods[k].map((p: any, idx: number) => {
                    return <div key={idx}>
                            {
                              Object.keys(p).map((p_k , p_idx: number) => {
                                return <li key={p_idx}>{p_k + " = " + p[p_k]}</li>
                              })
                            }
                           </div>
                  })}
                </ul>
        })
  };

  function onClickObjCheck(e: any, state: any) {
    console.log(state)
  }

  return (
    <div>
      {/* 今の状態だとボタンの下にチェックしたlistが表示されてしまうので、className="foodList"にswitchFoodListVisibleを持ってくる */}
      <div className="foodList">
        {switchFoodListVisible(switchVisible)}
      </div>
      <button type="submit" onClick={(e: any) => filterFoodIds(e, userSelectFoodIds)}>送信</button>
      <button type="submit" onClick={(e: any) => onClickObjCheck(e, userSelectFoods)}>userSelectFoodsの値確認</button>
    </div>
  )
}