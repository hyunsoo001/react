/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import "./App.css";
import _ from "lodash";

function App() {
  let post = "역삼 우동 맛집";
  //순수 자바스크립트
  //document.querySelector('h4').innerHTML = post;

  let [글제목, 글제목변경] = useState([
    "기본탄탄",
    "개념탄탄",
    "응용하기",
    // [1, 2, 3],
    // { key: "value" },
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [order, setOrder] = useState(0);

  let [입력값, 입력값변경] = useState(null);

  let [날짜, 날짜변경] = useState(["2월 15일", "2월 16일", "2월 17일"]);

  //let [test, setTest] = useState(["하나", "둘", [1, 2, 3], { key: "value" }]);
  let test = [["하나", "둘", [1, 2, 3], { key: "value" }]];

  let test2 = ["하나", "둘", "셋"];

  //모든게 state가 아니라 자주변경하는건 state로 해주는거다.
  //고정적인 제목같은거 차라리 그냥 하드코딩이 이득이다.
  //let [logo, setLog] = useState("ReactBlog");

  //Destructuring문법
  //let num = [1, 2];
  // let a = num[0];
  // let c = num[1];
  //let [a, c] = [1, 2];

  // useEffect(() => {
  //   console.log("test : ", test);
  // }, [test]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "테스트";
          // copy[3] = [9, 9, 9];
          // copy[4] = { key: "test" };
          //copy.sort();
          글제목변경(copy);

          //주소값이 같아서 상태관리 비교했을 때 값이 같아서 렌더링이 일어나지 않음
          // let temp = 글제목;
          // temp[0] = "테스트";
          // 글제목변경(temp);

          //얕은복사
          let copy2 = [...test];
          copy2[0][1] = "불나방";
          copy2[0][2][0] = 999;
          copy2[1] = "하이";
          copy2[2] = [9, 9, 9];
          copy2[3] = { confirm: "hi" };

          let copy3 = [...test2];
          copy3[0] = "백";

          //깊은복사
          // let copy2 = _.cloneDeep(test);
          // copy2[0][1] = "불나방";
          // copy2[0][2][0] = 999;
          // copy2[1] = "하이";
          // copy2[2] = [9, 9, 9];
          // copy2[3] = { confirm: "hi" };

          //setTest(copy2);

          // console.log("test : ", test);
          console.log("copy2 : ", copy2);
          console.log("test : ", test);

          // console.log("글제목 : ", 글제목);
          // console.log("copy : ", copy);

          // console.log("test2 : ", test2);
          // console.log("copy3 : ", copy3);
        }}
      >
        제목변경
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "중급개념";
          글제목변경(copy);
        }}
      >
        글수정
      </button>
      {/* <div className="list">
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
        <h4
          onClick={() => {
            // eslint-disable-next-line no-lone-blocks
            {
              modal === false ? setModal(true) : setModal(false);
            }
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setOrder(i);
              }}
            >
              {글제목[i]}

              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>{날짜[i]}</p>

            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);

                let copy2 = [...따봉];
                copy2.splice(i, 1);
                따봉변경(copy2);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          // let copy = [...글제목];
          // copy.push(입력값);
          // 글제목변경(copy);

          // let copy2 = [...따봉];
          // copy2.push(0);
          // 따봉변경(copy2);
          입력값 !== null && 입력값 !== ""
            ? // 입력값이 null이 아닌 경우
              (() => {
                let currentDate = new Date();

                let copy = [...글제목];
                copy.push(입력값);
                글제목변경(copy);

                let copy2 = [...따봉];
                copy2.push(0);
                따봉변경(copy2);

                let copy3 = [...날짜];
                copy3.push(currentDate.toString());
                날짜변경(copy3);

                // 입력값을 null로 초기화
                입력값변경(null);

                console.log("입력값 :" + 입력값);
              })()
            : e.preventDefault();
        }}
      >
        글발행
      </button>
      {modal === true ? (
        <Modal 글제목={글제목} 글제목변경={글제목변경} order={order} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.order]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = "여자코트추천";
          props.글제목변경(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
