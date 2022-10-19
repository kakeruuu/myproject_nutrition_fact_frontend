/*
  MEMO：
  stateに特定の値が含まれていなかったらsetStateする。入っていたらspliceで値を削除する
  stateは<string[]> 検索値は<string>
  以上の形で見ると、stateの値を増減させる関数として汎用化できる？
*/
// state内にaddItemが存在するか評価し、存在すれば追加、存在しなければ取り除く関数
export const addStates = (state: any, setState: any, addItem: any, e=undefined) => {
  console.log(state)
  if (!state.includes(addItem)) {
      return setState([...state, addItem])
  }
  const index = state.indexOf(addItem)    
  // spliceされた対象が表示される
  state.splice(index,1)
  return setState([...state])
};