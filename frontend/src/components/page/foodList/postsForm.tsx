import React, { useState } from "react";
import { ReadFoodList } from "../../api/postFoodList"

// MEMO:FoodListから呼ばれる方が自然？
// 汎用的に使える？
export function PostsForm(setPost: any) {  
    const [val, setVal] = useState<string>("")
  
    return (
      <div className="postsForm">
        <input type="text" id="postBox" value={val} onChange={(e) => setVal(e.target.value)}></input>
        <button type="submit" onClick={(e: any) => ReadFoodList({query: val}, setPost)}>送信</button>
      </div>
    )
  }