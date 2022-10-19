import React, { useContext } from "react";
import { UserSelectFoodNamesContext } from "./providers"
import { addStates } from "../../functional/states/addStates"

// 状態変化を適切に考えないとおかしくなる
export const SwitchFoodListVisible = (switchVisibleBool: boolean, ulObj: Record<string, string[]>) => {
  const keys = Object.keys(ulObj)
  // 明示的にTypeを設定しないといけない。
  const { userSelectFoodNames, setUserSelectFoodNames } = useContext(UserSelectFoodNamesContext)  
  console.log(userSelectFoodNames)
  
  if (switchVisibleBool) {
    return createUlWithTitle(keys, ulObj, userSelectFoodNames, setUserSelectFoodNames)
  }
  return createUlWithTitle(keys, ulObj)
  // return keys.map((k, i) => {
  //     return <ul key={i}>
  //               <p>{k}</p>
  //               {/* TODO:pのデータ型を考える */}
  //               {/* {ulObj[k].map((p: any, idx: number) => {
  //                 return <div key={idx}>{p[k]}</div>
  //               })} */}
  //             </ul>
  //     })
};

// li要素作成のラッパー関数として定義できないだろうか？
const createUlWithTitle = (keys: string[], ulObj: any, states: any = undefined, setStates: any = undefined) => {
  return keys.map((k: any, i: number) => {
    return <ul key={i}>
              <p>{k}</p>
              {
                createLi(k, ulObj, states, setStates)
              }
            </ul>
            })
}

const createLi = (key: any, ulObj: any, states: any, setStates: any) => {
  return ulObj[key].map((p: any, idx: number) => {
    return <li key={idx} onClick={(e: any) => addStates(states, setStates, p.food_name)}>{p.food_name}</li>
  })
}

// userが選択したfood_nameの成分を表示する機能を表現した関数を作る