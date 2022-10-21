import React, { useContext } from "react";
import { UserSelectFoodNamesContext } from "./providers"
import { addStates } from "../../functional/states/addStates"

// 状態変化を適切に考えないとおかしくなる
// propsにしようと思ったけど、呼び出し側でコンポーネント呼び出しになっていない
// switchVisibleBool: boolean, postObj: Record<string, string[]>, state: any, setState: any
// この状態だとpostsとuserSelectFoodNamesが空のためエラーを引き起こす可能性がある
export const SwitchFoodListVisible = ({switchProps}: any) => {
  // const keys = Object.keys(props.postObj)
  const keys = Object.keys(switchProps.switchVisible)
  // 明示的にTypeを設定しないといけない。
  console.log(switchProps.switchVisible)
  console.log(switchProps.posts)
  return <div>test</div>
  // if (switchVisibleBool) {
  //   return createUlWithTitle(keys, postObj, state, setState, switchVisibleBool)
  // }
  // return createUlWithTitle(keys, postObj, state, setState, switchVisibleBool)
};

// MEMO:li要素作成関数から呼び出すラッパーとして定義できないだろうか？
const createUlWithTitle = (keys: string[], postObj: any, states: any = undefined, setStates: any = undefined, switchVisibleBool: boolean) => {
  function switchLi(k: string, postObj: any, states: any, setStates: any) {
    if (switchVisibleBool) {
      return createLi(k, postObj, states, setStates)
    }
    return createUserSelectLi(k, postObj)
  }

  return keys.map((k: any, i: number) => {
    return (
      <ul key={i}>
        <p>{k}</p>
        {
          // ここでもスイッチしてるのおかしい
          switchLi(k, postObj, states, setStates)
        }
      </ul>
    )
  })
}

// ここでuseContextを呼び出すとエラーが出る↓
// Warning: React has detected a change in the order of Hooks called by FoodList. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks:
const createLi = (key: any, postObj: any, states: any, setStates: any) => {
  return postObj[key].map((p: any, idx: number) => {
    return <li key={idx} onClick={(e: any) => addStates(states, setStates, p.food_name)}>{p.food_name}</li>
  })
}

// userが選択したfood_nameの成分を表示する機能を表現した関数を作る
// FIX:postsの状態を変化させた後に以下の関数で食材一覧が表示できないを直す
// →表示されるタイミングの問題？
// →渡されている値は正常だった。
const createUserSelectLi = (key: any, postObj: any) => {
  console.log("postObj= " + JSON.stringify(postObj))
  console.log("key=" + String(key) + " type=" + typeof(key))
  return postObj[key].map((p: any, idx: number) => {
    return <li key={idx}>{p[key]}</li>
  }) 
}