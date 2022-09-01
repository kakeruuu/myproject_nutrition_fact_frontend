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
  const [texts, setText] = useState([])
  
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
  const [posts, setPost] = useState([])
  const [val, setVal] = useState("")

  const params = {method: "POST",
                  headers:{'Content-Type': 'application/json'},
                  body : JSON.stringify({query: val})}

  // リクエストボディの値とschemasのBaseModelのデータ型とデータ名を比較している
  // つまりリクエストボディの値とschemasのクラスのデータ型を一致させなければならない
  // fastapiのcrudやroute上での変数はわかれば何でもいい。
  const apiPost = () => {
    // searchから帰ってくる値はリスト
    fetch("http://localhost/search", params)
    .then(response => response.json())
    .then(data => {
      // 空のリストにリストの値のみをすべて代入する
      setPost(data)
      setVal("")
    })
  }
  
  return (
    <div id="posts">
      <input type="text" id="postBox" value={val} onChange={(event) => setVal(event.target.value)}></input>
      <button type="submit" onClick={apiPost}>送信</button>
      <ul>
        {posts.map((post, index) => {
          return <li key={index} id={post.NutritionFact.id}>{post.NutritionFact.food_name}</li>
        })}
      </ul>
    </div>
  )
}