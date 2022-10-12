import React, { useState, useEffect } from "react";
import { FoodList } from "./page/foodList/foodList";

// import { foodLists, foodObject, postsBase } from "./foodlist/FoodListType";
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
// postsのuseStateを以下で定義してPostsformに渡した方がきれい？
// http://www.code-magagine.com/?p=13251
// MEMO:App.tsxでログイン画面やFoodList表示画面の切り替えを表現する
export function App() {

  return (
    <div className="App">
      {/* ログイン画面などのページをどのタイミングで表示するかなどの処理もここに書く */}
      <FoodList />
    </div>
  );
}

// TODO：テストについて学ぶ