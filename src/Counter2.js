import { useEffect, useState } from "react";
import "./index.css"; 
 
function Counter2({ onDelete, id, onChange, defaultValue }) { 
  return ( 
    <div className={`back ${defaultValue % 2 === 0 ? "chet" : "nechet"}`}> 
      <div className="wrapper"> 
        <div className="numberr"> 
          <h1>{defaultValue}</h1> 
        </div> 
        <div className="chetnyi"> 
          Введено {defaultValue % 2 !== 0 ? "не" : ""}четное число 
        </div> 
        <div className="buttons"> 
          <button 
            onClick={() => { 
              defaultValue > 0 && onChange(id, defaultValue-1); 
            }} 
          > 
            - 
          </button> 
          <button onClick={() => onChange(id, 0)}>Reset</button> 
          <button 
            onClick={() => { 
              onChange(id, defaultValue+1); 
            }} 
          > 
            + 
          </button> 
          <button onClick={() => onDelete(id)}>Delete</button> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default Counter2;