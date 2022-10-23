import React, { cloneElement } from "react";
import { addStates } from "../../functional/states/addStates"

// パフォーマンスに問題が出てきた段階でメモ化を検討する
// // <ul>をこれにすればいい？ 優先度の高いことを先に実装する
// export const ParentTest = ({ posts, children }: any) => {
  

//   // const propsWithChildren = (postsClasskey: string) => {
//   //   const foodListAry = posts[postsClasskey]
//   //   return cloneElement(children, { foodListAry: foodListAry })
//   // }

//   const testClone = cloneElement(children, {test: "test"})
//   return (
//     <div className="Test">
//       <div>こちらがParentTest</div>
//       {Object.keys(posts).map((postsClasskey: any, idx: number) => {
//         return (
//           <ul key={idx}>
//             <div>{postsClasskey}</div>
//             {/* {propsWithChildren(postsClasskey)} */}
//             {testClone}
//           </ul>
//           )
//       })}
//     </div>
//   )
// }

// export const ChildTest = ({ props }: any) => {
//   return (
//     <>
//       {props.test}
//       {/* {props.foodListAry.map((foodDetailObj: Record<string, string>, idx: number) => {
//         return <li key={idx}>{foodDetailObj.food_name}</li>
//       })} */}
//     </>
//     )
// }

// // <li>
// export const TestContainment1 = ({switchProps}: any) => {
//   const {posts, states, setStates} = switchProps
  
//   return (
//     <div>
//       <ParentTest posts={posts}>
//         <ChildTest />
//         {/* <>Test</> */}
//       </ParentTest>
//     </div>
//   )
// }

// export const TestContainment2 = ({switchProps}: any) => {
//   // const {posts, states, setStates} = switchProps
  
//   return (
//     <>
//       test2
//     </>
//   )
// }


// TODO：変数名、プロパティ名が絶望的にわかりづらいから修正する
// li要素がクリックされるたびにレンダリングされてしまっている
export const FoodListVisible = ({switchProps}: any) => {
  const {switchVisible, posts, states, setStates} = switchProps

  // postsClasskey: 砂糖、人参など foodListAry: foodObject[]→[{id: "", food_name: "", ...}, {id: "", food_name: "", ...}]
  return (
    <>
      {Object.keys(posts).map((postsClasskey: any, idx: number) => {
        return (
          <ul key={idx}>
            <div>{postsClasskey}</div>
            {switchVisible ?
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

