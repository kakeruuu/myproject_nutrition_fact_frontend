import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { readFoodList } from "../../api/postFoodList"


type Inputs = {
  foodName: string
}

// 汎用的に使える？→使えそうなら別途ディレクトリ作成してそちらに移すのもありかもしれない。
// 汎用的に使えることを想定して個別でファイルを作成
export const PostsForm = ({updateSetPost}: any) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({
    mode: "onChange",
    criteriaMode: "all",
    shouldFocusError: false
  })

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    readFoodList({query: data.foodName}, updateSetPost)
    reset()
  }

  // const foodNameRegExp = /([\u3041-\u3096]+、*)*/g
  // FIX:以下のコードだと一致していない文字列が入っていてもエラーをはかない（例:「砂糖、www」 「qqq, にんじん」）
  // MEMO:patternのうまい書き方がわからないのでAPI側で処理する？
  const foodNameRegExp = /[\u3041-\u3096 \u30A1-\u30FA 々〇〻\u3400-\u9FFF\uF900-\uFAFF]|[\uD840-\uD87F][\uDC00-\uDFFF]/g

  // TODO:Validationの追加
  // TODO:存在しない文字列が検索された時に値に空の配列が渡されるが、それをトリガーに検索された〇〇という文字列は存在しないというエラー処理を追加する。
  // TODO:検索文字列に使われる、「,」を「、」に変える→ユーザーの入力のしやすさは右のほうがしやすいと思われるため。
  return (
    <div className="postsForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>食材検索</label>
          <input type="text" id="postBox" {...register("foodName",{
            required: true,
            maxLength: 60,
            // MEMO:正規表現は要テスト
            pattern: foodNameRegExp,
          })}></input>
          {errors.foodName?.types?.required && "文字が入力されていません"}
          {errors.foodName?.types?.maxLength && "30文字以上が入力されています"}
          {errors.foodName?.types?.pattern && "入力形式が間違っています"}
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
}