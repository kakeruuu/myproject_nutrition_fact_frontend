import React, { useState,useEffect } from "react";
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
// const ApiFetch = () => {

// }
// TODO：Api呼び出し方法について調べているうちにuseStateやsetStateについて知る必要があるとわかり、
// コンポーネントから改めて学習中。現在、「state を正しく使用する」まで学習。
// 次回はそのあとから開始する
// 関数コンポーネントのほうが推奨っぽい？

export function Test() {
  const [count, setCount] = useState(0)

  // マウント時・更新・アンマウント時
  // TODO：リクエストを送る
  useEffect(() => {
    fetch("")
      .then(response => response.json())
      .then()
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

