import React, { useContext } from "react";
import { UserSelectFoodNamesContext } from "./foodList"
import { addStates } from "../../functional/states/addStates"

// 状態変化を適切に考えないとおかしくなる
// userSelectFoodNames, updateSetUserSelectFoodNames の受け渡し方法を考える。
export const SwitchFoodListVisible = (switchVisibleBool: boolean, ulObj: Record<string, string[]>) => {
  const keys = Object.keys(ulObj)
  // 明示的にTypeを設定しないといけない。
  // Type指定の場合はset関数をラッピングした関数を指定する
  const { userSelectFoodNames, updateSetUserSelectFoodNames } = useContext(UserSelectFoodNamesContext)
  
  if (switchVisibleBool) {
    return keys.map((k: any, i: number) => {
      return <ul key={i}>
                <p>{k}</p>
                {ulObj[k].map((p: any, idx: number) => {
                  // TODO：クリック時にクリックしたリストであるということがわかる処理を加えたい。
                  // return <li key={idx} onClick={(e: any) => addFoodNames(e, p.food_name)}>{p.food_name}</li>
                  return <li key={idx} onClick={(e: any) => addStates(userSelectFoodNames, updateSetUserSelectFoodNames, p.food_name)}>{p.food_name}</li>
                })}
              </ul>
      })
  }
  // [[{id: "677", food_name: "test"....},....], [{}]]
  // 結局、<ul>かつ表示するキーを厳選するなら、1の方がいい？
  // 1の内容をPostsと同じ形式に成型すればTrueの時の処理と同じ処理にまとめられる？
  return keys.map((k, i) => {
      return <ul key={i}>
                <p>{k}</p>
                {/* TODO:pのデータ型を考える */}
                {/* {ulObj[k].map((p: any, idx: number) => {
                  return <div key={idx}>{p[k]}</div>
                })} */}
              </ul>
      })
};