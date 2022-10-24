import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { readFoodList } from "../../api/postFoodList"


type Inputs = {
  foodName: string
}

// 汎用的に使える？→使えそうなら別途ディレクトリ作成してそちらに移すのもありかもしれない。
// 汎用的に使えることを想定して個別でファイルを作成
export const PostsForm = ({updateSetPost}: any) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    readFoodList({query: data.foodName}, updateSetPost)
    reset()
  }

  // TODO:Validationの追加
  // TODO:存在しない文字列が検索された時に値に空の配列が渡されるが、それをトリガーに検索された〇〇という文字列は存在しないというエラー処理を追加する。
  return (
    <div className="postsForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>食材検索</label>
          <input type="text" id="postBox" {...register("foodName",{
            required: true,
            maxLength: 30,
            pattern: {
              value:
              // MEMO:正規表現は要テスト
                /([ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]+、*)*/g,
              message: "検索文字列の形式が間違っています。",
            }
          })}></input>
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
}