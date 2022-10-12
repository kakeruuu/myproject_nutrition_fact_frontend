// MEMO:ReadFoodListはあくまでAPIにテキストを渡して値を返してもらうだけの設計にしたい
export function ReadFoodList(query: object, setPost: any) {
  const params = {method: "POST",
                  headers:{'Content-Type': 'application/json'},
                  // queryオブジェクトを渡すようにする {query: val} ←これが引数の形
                  body : JSON.stringify(query)}

  const apiPost = () => {
    // searchから帰ってくる値はリスト
    fetch("http://localhost/search", params)
    .then(response => response.json())
    .then(data => {
      setPost(data)
    })
  }

  apiPost()
}