import React, { useState } from "react";
import { ReadFoodList } from "../../api/postFoodList"


// MEMO:FoodListから呼ばれる方が自然？
// 汎用的に使える？→使えそうなら別途ディレクトリ作成してそちらに移すのもありかもしれない。
// 汎用的に使えることを想定して個別でファイルを作成
export const PostsForm = ({updateSetPost}:any) => {
  const [val, setVal] = useState<string>("");

  return (
    <div className="postsForm">
      <input type="text" id="postBox" value={val} onChange={(e) => setVal(e.target.value)}></input>
      <button type="submit" onClick={(e: any) => ReadFoodList({ query: val }, updateSetPost)}>送信</button>
    </div>
  );
}