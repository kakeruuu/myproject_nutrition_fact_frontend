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
// TODO：Api呼び出し方法について調べているうちにuseStateやsetStateについて知る必要があるとわかり、
// コンポーネントから改めて学習中。現在、「state を正しく使用する」まで学習。
// 次回はそのあとから開始する
// 関数コンポーネントのほうが推奨っぽい？


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
      {/* 再レンダリング */}
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
  const [posts, setPost] = useState("")
  const [val, setVal] = useState("")

  // postで渡す値はjsonのほうがいい？
  // その場合、バックエンドのcrudの引数を変えないと上手くいかない
  const params = {method: "POST", body : JSON.stringify({q: posts})}
  const apiPost = () => {
    fetch("https://httpbin.org/post", params)
    .then(response => response.json())
    .then(data => {
      setPost(data.json.q + val)
      setVal("")
    })
  }
  
  return (
    <div id="posts">
      <input type="text" id="posts" value={val} onChange={(event) => setVal(event.target.value)}></input>
      <button type="submit" onClick={apiPost}>送信</button>
      <p>{posts}</p>
    </div>
  )
}