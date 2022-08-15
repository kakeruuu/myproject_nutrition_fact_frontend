// import React はJSXファイルをReact.createElement()に変換する
// つまりReact.createElement()の記述をなくせる？
import React from "react";
// import axios from "axios";
import './App.css';

// Reactコンポ―ネントはHelloWorldのようなパスカルケースを好む

// Appをappにしたらエラーになる
// function App() {
// 	const [data, setData] = React.useState([]);
// 	const url = "http://127.0.0.1:80";

// 	const GetData = () => {
// 		axios.get(url).then((res) => {
// 			setData(res.data);
// 		});
// 	};
// 
// 以下はHTMLを記述しているだけ
// 	return (
// 		<div>
// 			<div>ここに処理を書いていきます</div>
// 			{data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得</button>}
// 		</div>
// 	);
// }

function Test(props) {
	const data = props.subject;
	
	return (
		<div className="App">
			<p>
				Hello, {data}!
			</p>
		</div>	
	);
}

// Appコンポーネントを他のモジュールでも使えるようにする
// export default App;
export default Test;