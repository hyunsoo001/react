import { useState } from "react";
import "./App.css";

function App() {
  let post = "역삼 우동 맛집";
  //순수 자바스크립트
  //document.querySelector('h4').innerHTML = post;

  let [글제목, 글제목변경] = useState([
    "남자코트추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  //모든게 state가 아니라 자주변경하는건 state로 해주는거다.
  //고정적인 제목같은거 차라리 그냥 하드코딩이 이득이다.
  //let [logo, setLog] = useState("ReactBlog");

  //Destructuring문법
  //let num = [1, 2];
  // let a = num[0];
  // let c = num[1];
  //let [a, c] = [1, 2];

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
