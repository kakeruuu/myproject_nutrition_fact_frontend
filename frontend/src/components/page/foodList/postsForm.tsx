import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form"
import { readFoodList } from "../../api/postFoodList"


// MEMO:FoodListから呼ばれる方が自然？
// 汎用的に使える？→使えそうなら別途ディレクトリ作成してそちらに移すのもありかもしれない。
// 汎用的に使えることを想定して個別でファイルを作成
export const PostsForm = ({updateSetPost}: any) => {
  // const [val, setVal] = useState<string>("");
  const foodNameRef = useRef<HTMLInputElement>(null)
  

  // readFoodListに状態が空かどうかの状態を管理するstateを送ってエラーなら何らかの状態に更新させる
  // isVal的な関数を作成してreadFoodListと組み合わせる
  const handleSubmit = (e: any) => {
    e.preventDefault()
    const currentValue = foodNameRef.current?.value
    readFoodList({query: currentValue}, updateSetPost)
  }

  return (
    <div className="postsForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label>食材検索</label>
          <input type="text" id="postBox" ref={foodNameRef}></input>
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
}