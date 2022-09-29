import React, { useState, useEffect } from "react";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Box from "@mui/material/Box"
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
// import Stack from '@mui/material/Stack';
// import TextField from "@mui/material/TextField";
// import Typography from '@mui/material/Typography';
// import { ExpandMore } from '@mui/icons-material';
// import { ExpandLessIcon } from '@mui/icons-material';

// コンポーネント名は常に大文字から開始する

export function Test() {
  const [texts, setText] = useState<any[]>([]);
  
  // 更新された値を使う処理みたいなのが適している？
  useEffect(() => {
    document.title = texts.join()
  })

  const apiGet = () => {
    fetch("http://localhost", {method: "Get"})
    .then(res => res.json())
    .then(data => {
      setText([...texts, data.Hello])
    })
  }

  return (
    <div>
      <button onClick={apiGet}>
        テキスト追加
      </button>
      <PostsForm />
      <ul>
        {texts.map((text, index) => {
          return <li key={index}>{text}</li>
        })}
      </ul>
    </div>
  );
}

function PostsForm() {
  const [posts, setPost] = useState<any[]>([])
  const [val, setVal] = useState<string>("")

  const params = {method: "POST",
                  headers:{'Content-Type': 'application/json'},
                  body : JSON.stringify({query: val})}

  const apiPost = () => {
    // searchから帰ってくる値はリスト
    fetch("http://localhost/search", params)
    .then(response => response.json())
    .then(data => {
      setPost(data)
      setVal("")
    })
  }

  return (
    <div id="posts">
      <input type="text" id="postBox" value={val} onChange={(event) => setVal(event.target.value)}></input>
      <button type="submit" onClick={apiPost}>送信</button>
      <FoodList posts={posts}/>
    </div>
  )
}

function FoodList({posts}: {posts: any}){
  const keys = Object.keys(posts);
  const [userSelectFoodIds, setUserSelectFoodIds] = useState<number[]>([])
  const [filteringFoodIds, setFilteringFoodId] = useState<any[]>([])
  const [switchVisible, setSwitchVisible] = useState<boolean>(true)
  // テキストをクリックするとイベントが起きて、StateにPostするための値が保存されるみたいな？
  // そうするとliの要素にイベントを追加する必要がある？
  // 1.<li>をクリックできる要素にする
  // 2.<li>にイベントトリガーを付ける
  // 3.イベントトリガーで値をStateに保存できるようにする
  // 4.Stateに保存したfoodIdsを利用して表示するfoodを絞り込む　→　postFoodIds

  // <li>がクリックされるとその値を出力する
  const addFoodIds = (e: any, id: number) => {
    // MEMO：アラートではなく、UIが直接変わって配列が削除されたことが明示的にわかる方がいいかも
    if (!userSelectFoodIds.includes(id)) {
      setUserSelectFoodIds([...userSelectFoodIds, id])
    } else {
      const index = userSelectFoodIds.indexOf(id)
      userSelectFoodIds.splice(index,1)
    }
  };

  // postからユーザーが選択したfoodIdのみ抽出する
  const filterFoodIds = (e: any, ids: number[]) => {
    setSwitchVisible(false)
    const tmpList = keys.map((k) => 
      // MEMO:APIの処理でPostの値がすべて文字列になっている。
      // TODO:postの要素の型付け方法を考える
      posts[k].filter((p: { id: any; }) => ids.includes(p.id))
    )
    setFilteringFoodId([...filteringFoodIds, ...tmpList])
  };

  const switchFoodListVisible = (switchVisibleBool: boolean) => {
    if (switchVisibleBool) {
      return <div></div>
    } else {
      // TODO：filteringFoodIdsの表示方法をどうするか考える。
      // 
      console.log("成功パターン")
      console.log(filteringFoodIds)
      // [[{id: "677", food_name: "test"....},....], [{}]]
      // return filteringFoodIds.map((foodArray) => {
      //   foodArray.map((foodsObject, ) => {
      //     Object.keys(foodsObject).map((key, idx) => {
      //       return <li key={idx}>
      //               {foodsObject[key]}
      //              </li>
      //     })
      //   })
      // })
      // return
    }
  };

  
  return (
    <div>
      <div className="foodList" style={{ visibility: switchVisible ? "visible" : "hidden" }}>
        {keys.map((k, i) => {
          return <ul key={i}>
                    <p>{k}</p>
                    {posts[k].map((p: { id: number, food_name: string; }, idx: number) => {
                      // TODO：クリック時にクリックしたリストであるということがわかる処理を加えたい。
                      return <li key={idx} onClick={(e: any) => addFoodIds(e, p.id)}>{p.food_name}</li>
                    })}
                 </ul>
        })}
      </div>
      {/* <input type="text" id="postBox" value={val} onChange={(event) => setVal(event.target.value)}></input> */}
      {/* 1.foodListクラスを非表示にする → おｋ*/}
      {/* 2.filterFoodIdsでfilterをかけたIdsを表示する */}
      <button type="submit" onClick={(e: any) => filterFoodIds(e, userSelectFoodIds)}>送信</button>
      <div className="filteringFoodList">
        {switchFoodListVisible(switchVisible)}
      </div>
    </div>
  )

}

// TODO：テストについて学ぶ