
import './App.css';
import { useState } from 'react';

function App() {
  // let text = "text";
  
  // let h1text = "리액트 첫날"
  // let h2text = "h2텍스트입니다."
  // let h2style = {
  //   color: 'skyblue',
  //   fontSize: '14px',
  //   borderBottom: '1px solid #ddd'
  // }
  // let title = "리스트 만들기";
  // let list = "list";
  // let red = "red";

  const [count, setCount] = useState(0);

  let plus = () => {
    setCount(count + 1)
  }

  let reset = () => {
    count = 0
  }

  return (
    <>
      <div>
          <h1>0</h1>
          <button onClick={ plus }>+</button>
          <button onClick={ reset }>reset</button>
      </div>
      {/* <h1>{title}</h1>
      <div className="App">
        <ul className={ `${list} ${red}` }>
          <li>라면</li>
          <li>떡볶이</li>
          <li>피자</li>
        </ul>
      </div>

      <MyName name="123"></MyName>
      <MyName2 name2=""></MyName2> */}



      {/* 주석을 포함한 모든 요소는 반드시 태그로 감싸여져 있어야 함. 

      <h1 style={{textAlign:'center', color:'orange'}} >{ h1text }</h1>
      <h2 style={ h2style } >{ h2text }</h2>

      <p //태그 안에서 한줄 주석 가능
      >연습입니다.</p>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{color:'skyblue', marginTop: '300px' }} class={ text }>
            안녕하세요
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
