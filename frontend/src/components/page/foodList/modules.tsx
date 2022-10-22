import { Rectangle } from "@mui/icons-material";
import React from "react";
import { addStates } from "../../functional/states/addStates"


// TODO：変数名、プロパティ名が絶望的にわかりづらいから修正する
// li要素がクリックされるたびにレンダリングされてしまっている
export const FoodListVisible = ({switchProps}: any) => {
  // const keys = Object.keys(props.foodListObj)
  const {switchVisible, posts, states, setStates} = switchProps

  console.log(switchVisible)
  console.log(posts)

  return (
    <>
      {/* MEMO:あえてpostsが空の時は値は返さないみたいな処理を書いた方がいい？ */}
      {Object.keys(posts).map((postsClasskey: any, idx: number) => {
        return (
          <ul key={idx}>
            <div>{postsClasskey}</div>
            {switchVisible ?
              // postsClasskey: 砂糖、人参など foodListAry: foodObject[]→[{id: "", food_name: "", ...}, {id: "", food_name: "", ...}]
              <FoodNameList liProps={{foodListAry: posts[postsClasskey], states: states, setStates: setStates}}/>:
              <FoodDetailList liProps={{foodListAry: posts[postsClasskey]}}/>
            }
          </ul>
        )
      })}
    </>
  )
};

// MEMO:li要素作成関数から呼び出すラッパーとして定義できないだろうか？
// const CreateUlWithTitle = ({ulProps}: any) => {
  
//   const {switchVisible, posts, states, setStates} = ulProps

//   return (
//     <div className="foodListBox">
//       {Object.keys(posts).map((postsClasskey: any, idx: number) => {
//         return (
//           <ul key={idx}>
//             <div>{postsClasskey}</div>
//             {switchVisible ?
//               // postsClasskey: 砂糖、人参など foodListAry: foodObject[]→[{id: "", food_name: "", ...}, {id: "", food_name: "", ...}]
//               <FoodNameList liProps={{foodListAry: posts[postsClasskey], states: states, setStates: setStates}}/>:
//               <FoodDetailList liProps={{foodListAry: posts[postsClasskey]}}/>
//             }
//           </ul>
//         )
//       })}
//     </div>
//   )
// }

// foodDetailObj={id: "", food_name: "", ...}
// foodListAry: foodObject[]→[{id: "", food_name: "", ...}, {id: "", food_name: "", ...}]
const FoodNameList = ({liProps}: any) => {
  console.log(liProps.foodListAry)
  const {foodListAry, states, setStates} = liProps

  return (
    <div className="foodNameList">
      {foodListAry.map((foodDetailObj: any, idx: number) => {
        return <li key={idx} onClick={(e: any) => addStates(states, setStates, foodDetailObj.food_name)}>{foodDetailObj.food_name}</li>})
      }
    </div>
  )
}

// userが選択したfood_nameの成分を表示する機能を表現した関数を作る
const FoodDetailList = ({liProps}: any) => {

  const { foodListAry } = liProps

  const filterDetailObj = (foodDetailObj: Record<string, string>) => {
    const detailObjKeys = Object.keys(foodDetailObj)
    const exclusionKeys = ["id", "food_name", "class"]
    const filteringDetailObjKeys = detailObjKeys.filter((key) => {return !(exclusionKeys.includes(key))})

    return filteringDetailObjKeys.map((key, idx) => {
      return (
        <li key={idx}>{foodDetailObj[key]}</li>
      )
    })
  }

  const testObj = foodListAry[0]
  console.log(filterDetailObj(testObj))
  return (
    <div className="foodDetailList">
      {foodListAry.map((foodDetailObj: any, idx: number) => {
        return (
            <React.Fragment key={idx}>
              {foodDetailObj.food_name}
              {filterDetailObj(foodDetailObj)}
            </React.Fragment>
          )
        })
      }
    </div>
  ) 
}

