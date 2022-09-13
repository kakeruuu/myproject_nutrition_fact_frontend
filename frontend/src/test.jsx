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

  const apiPost = () => {
    // searchから帰ってくる値はリスト
    fetch("http://localhost/search", params)
    .then(response => response.json())
    .then(data => {
      setPost(data)
      setVal("")
    })
  }

  // TODO：次回検索ワードごとに該当foodを分ける。または、リストをセレクトボックスのようにして成分を知りたい食材をチェックできるようにする。
  return (
    <div id="posts">
      <input type="text" id="postBox" value={val} onChange={(event) => setVal(event.target.value)}></input>
      <button type="submit" onClick={apiPost}>送信</button>
      <FoodList posts={posts}/>
    </div>
  )
}
// backend返り値を辞書型に変えた影響で下記の関数が使えない。
// TODO：辞書を繰り返してタグの配列を返す形に変える
function FoodList({posts}){
  const keys = Object.keys(posts);
  // const foods = posts[k].map((p, idx) => {
  //     return <li key={idx}>{p.food_name}</li>
  //   })
  

  return (
    <div>
      {keys.map((k, i) => {
        return <ul key={i}>
                  <p>{k}</p>
                  {posts[k].map((p, idx) => {
                    return <li key={idx}>{p.food_name}</li>
                  })}
               </ul>
      })}
    </div>
  )

}
  