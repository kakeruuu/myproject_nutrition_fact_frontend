import React, { useState } from "react";
import { FoodLists, FoodObject } from "../../../types/foodListType"
import { PostsForm } from "./postsForm"
import { addStates } from "../../functional/states/addStates"

// TODO：postsのデータ型を直す
// TODO：配列内のオブジェクトに対するデータ型の設定でエラーが頻繁に起きているのでデータ型についてもう少し深く学ぶ
// MEMO：stateの受け渡しが上手くいってないので下記サイトを参考にpostsFormの修正を行う
// https://qiita.com/akifumii/items/ec9fdb9dd7d649c2f3dc
export function FoodList(): JSX.Element{
  const [posts, setPost] = useState<any[]>([])
  const keys: string[] = Object.keys(posts)
  const copyPosts: FoodLists = JSON.parse(JSON.stringify(posts))
  
  const [userSelectFoodNames, setUserSelectFoodNames] = useState<string[]>([])
  // MEMO：userSelectFoodsの変数名は要検討
  const [userSelectFoods, setUserSelectFoods] = useState<FoodLists>(copyPosts)
  const [switchVisible, setSwitchVisible] = useState<boolean>(true)

  // <li>がクリックされるとその値を出力する
  /*
  MEMO：
    stateに特定の値が含まれていなかったらsetStateする。入っていたらspliceで値を削除する
    stateは<string[]> 検索値は<string>
    以上の形で見ると、stateの値を増減させる関数として汎用化できる？
  */
  // const addFoodNames = (e: any, foodName: string) => {
  //   // TODO：ユーザーが選択したIDと削除されたIDが明示的にわかるように変更する
  //   if (!userSelectFoodNames.includes(foodName)) {
  //     setUserSelectFoodNames([...userSelectFoodNames, foodName])
  //   } 
  //   const index = userSelectFoodNames.indexOf(foodName)
  //   userSelectFoodNames.splice(index,1)
  // };


  // postからユーザーが選択したfoodIdのみ抽出する

  const filterFoodIds = (e: any, userSelectName: string[]) => {
    setSwitchVisible(false)
    let tmpObj: FoodLists = {}
    let tmpAry: FoodObject[] = []
    Object.keys(copyPosts).forEach((k: any) => {
      tmpAry = posts[k].filter((p: {food_name: string}) => userSelectName.includes(p.food_name))
      if (tmpAry.length) {tmpObj[k] = tmpAry}
    })
    setUserSelectFoods({...tmpObj})
  };

  // postsとuserSelectFoodsを同一のものにした方が良い？
  const switchFoodListVisible = (switchVisibleBool: boolean) => {
    if (switchVisibleBool) {
      // 
      return keys.map((k: any, i: number) => {
        return <ul key={i}>
                  <p>{k}</p>
                  {posts[k].map((p: { food_name: string; }, idx: number) => {
                    // TODO：クリック時にクリックしたリストであるということがわかる処理を加えたい。
                    // return <li key={idx} onClick={(e: any) => addFoodNames(e, p.food_name)}>{p.food_name}</li>
                    return <li key={idx} onClick={(e: any) => addStates(userSelectFoodNames, setUserSelectFoodNames, p.food_name)}>{p.food_name}</li>
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
                            {/* 次回：特定のキーの値のみ返す関数を作成する */}
                            {/* {
                              function(){
                                MEMO：id,classを除いたキーの配列を作成→そのあとキーの配列をもとに(p: any)から値を取り出して<li>にしてreturnする
                                let tmpAry: string[] = Object.keys(p).filter((p_k , p_idx: number) => {!(["id","class"].includes(p_k))})
                                let tmpObj: foodObject
                              }
                            } */}
                              
                              {Object.keys(p).map((p_k , p_idx: number) => {
                                // if で必要なプロパティのみ返すようにする
                                // つまりid ,class以外すべて必要
                                // filterでid,classではないものを返す
                                // ["id", "class"].includes()
                                // if (!(p_k==="id" || p_k==="class")){
                                  return <li key={p_idx}>{p_k + " = " + p[p_k]}</li>
                                // }
                                
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
      <PostsForm setPost={setPost}/>
      <div className="foodList">
        {switchFoodListVisible(switchVisible)}
      </div>
      <div className="displaySelectFoodIds">
        {<ul>
          <div>選択した食材一覧</div>
          {userSelectFoodNames.map((foodName: string, idx: number) => {
            return <li key={idx}>{foodName}</li>
          })}
        </ul>}
      </div>
      <button type="submit" onClick={(e: any) => filterFoodIds(e, userSelectFoodNames)}>送信</button>
      <button type="submit" onClick={(e: any) => onClickObjCheck(e, userSelectFoods)}>userSelectFoodsの値確認</button>
    </div>
  )
}