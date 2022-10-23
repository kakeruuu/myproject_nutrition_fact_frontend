import React, { useState, useContext } from "react";
import { FoodLists, FoodObject } from "../../../types/foodListType"
import { PostsForm } from "./postsForm"
import { FoodListVisible } from "./modules"
// import { FoodListVisible, TestContainment1, TestContainment2 } from "./modules"
import { UserSelectFoodNamesContext } from "./providers"

// MEMO:userSelectFoodNamesの値が複数回呼び出されている
export const FoodList = () => {
  // TODO：空のインプットを渡された時の処理を考える
  const [posts, setPost] = useState<any>({})
  const updateSetPost = (obj: FoodLists | any): void => setPost(obj)
  const [switchVisible, setSwitchVisible] = useState(true)
  const { userSelectFoodNames, setUserSelectFoodNames } = useContext(UserSelectFoodNamesContext)

  // postからユーザーが選択したfoodIdのみ抽出する
  // 同時に複数のstateを更新する場合はstateをオブジェクトにする
  const filterFoodIds = (e: any, userSelectName: string[]) => {
    let tmpObj: FoodLists = {}
    let tmpAry: FoodObject[] = []
    Object.keys(posts).forEach((k: any) => {
      tmpAry = posts[k].filter((p: {food_name: string}) => userSelectName.includes(p.food_name))
      if (tmpAry.length) {tmpObj[k] = tmpAry}
    })
    setSwitchVisible(false)
    setPost({...tmpObj})
  };

  function onClickObjCheck(e: any, state: any) {
    console.log(state)
  }

  const switchProps = {
    switchVisible: switchVisible,
    posts: posts,
    states: userSelectFoodNames,
    setStates: setUserSelectFoodNames
  }

  // const switchPropsTest = {    
  //   posts: posts, 
  //   states: userSelectFoodNames,
  //   setStates: setUserSelectFoodNames
  // }

  return (
    <>
      <PostsForm updateSetPost={updateSetPost}/>
      <div className="foodList">
        <FoodListVisible switchProps={switchProps}/>
        {/* {switchVisible ? 
          <TestContainment1 switchProps={switchPropsTest}/>:
          <TestContainment2 switchProps={switchPropsTest}/>
        } */}
      </div>
      <div className="displaySelectFoodIds">
        {<ul>
          <div>選択した食材一覧</div>
          {userSelectFoodNames.map((foodName: string, idx: number) => {
            return <li key={idx}>{foodName}</li>
          })}
        </ul>}
      </div>
      {/* 送信ボタンが押されるとpostの値がuserの選択した値のみになる */}
      <button type="submit" onClick={(e: any) => filterFoodIds(e, userSelectFoodNames)}>送信</button>
      <button type="submit" onClick={(e: any) => onClickObjCheck(e, posts)}>userSelectFoodsの値確認</button>
    </>
  )
}