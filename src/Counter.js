import { useState } from "react";
import './index.css';

function Counter() {
  const [num, setNum] = useState(0)
    return(
        <div className={`back ${num%2===0 ? "chet" : "nechet"}`}>
    <div className="wrapper">
      <div className="numberr">
      <h1>{num}</h1>
      </div>
      <div className="chetnyi">
        Введено {num%2!==0 ? "не": ""}четное число
      </div>
      <div className="buttons">
        <button onClick={() => {num>0 && setNum(num-1)}}>
        -  
        </button>
        <button onClick={() => setNum(0)}>
        Reset  
        </button>
        <button onClick={() => setNum(num+1)}>
        +
        </button>
      </div>
    </div>
    </div>
    );
}

export default Counter;