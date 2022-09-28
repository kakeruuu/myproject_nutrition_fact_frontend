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
  const [val, setVal] = useState("")

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
  const [foodIds, setFoodId] = useState<number[]>([])

  // const foods = posts[k].map((p, idx) => {
  //     return <li key={idx}>{p.food_name}</li>
  //   })

  // TODO:<li>で出力される値をクリックできる要素に変更する
  // テキストをクリックするとイベントが起きて、StateにPostするための値が保存されるみたいな？
  // そうするとliの要素にイベントを追加する必要がある？
  // 1.<li>をクリックできる要素にする
  // 2.<li>にイベントトリガーを付ける
  // 3.イベントトリガーで値をStateに保存できるようにする
  // 4.stateに保存した値をPostできるようにする
  // TODO:keys.mapのreturnの値を変数にまとめる

  // <li>がクリックされるとその値を出力する
  const addFoodIds = (e: any, id: number) => {
    // MEMO：同じ値をクリックしたら削除のほうが親切
    // MEMO：アラートではなく、UIが直接変わって配列が削除されたことが明示的にわかる方がいいかも
    if (!foodIds.includes(id)) {
      setFoodId([...foodIds, id])
    } else {
      const index = foodIds.indexOf(id)
      foodIds.splice(index,1)
      alert("同IDを削除しました。")
    } 
  }

  return (
    <div>
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
  )

}

// TODO:any型のものをできるだけ特定の方に変更する。また、型の種類について調べる。