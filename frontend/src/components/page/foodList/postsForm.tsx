import React, { useState, FC } from "react";
// import { ReadFoodList } from "../../api/postFoodList"


// MEMO:FoodListから呼ばれる方が自然？
// 汎用的に使える？→使えそうなら別途ディレクトリ作成してそちらに移すのもありかもしれない。
// 汎用的に使えることを想定して個別でファイルを作成
export const PostsForm = ({updateSetPost}:any) => {
  const [val, setVal] = useState<string>("");

  function ReadFoodList(query: any) {
    const params = {method: "POST",
                    headers:{'Content-Type': 'application/json'},
                    // queryオブジェクトを渡すようにする {query: val} ←これが引数の形
                    body : JSON.stringify(query)}
  
    const apiPost = () => {
      // searchから帰ってくる値はリスト
      fetch("http://localhost/search", params)
      .then(response => response.json())
      .then(data => {
        updateSetPost(data)
      })
    }
  
    apiPost()
  }

  return (
    <div className="postsForm">
      <input type="text" id="postBox" value={val} onChange={(e) => setVal(e.target.value)}></input>
      <button type="submit" onClick={(e: any) => ReadFoodList({ query: val })}>送信</button>
    </div>
  );
}