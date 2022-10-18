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
    return createUlWithTitle(keys, ulObj, userSelectFoodNames, updateSetUserSelectFoodNames)
  }
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

const createUlWithTitle = (keys: string[], ulObj: any, states: any, setStates: any) => {
  return keys.map((k: any, i: number) => {
    return <ul key={i}>
              <p>{k}</p>
              {createLi(k, ulObj, states, setStates)}
            </ul>
            })
}

const createLi = (key: any, ulObj: any, states: any, setStates: any) => {
  return ulObj[key].map((p: any, idx: number) => {
    return <li key={idx} onClick={(e: any) => addStates(states, setStates, p.food_name)}>{p.food_name}</li>
  })
}