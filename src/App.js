import { useEffect, useState } from "react"; 
import Counter2 from "./Counter2"; 
import "./index.css"; 
 
function App() { 
  const [numb, setNumb] = useState([]); 
  const [counter_num, setCounterNum] = useState(0); 
  const [counterAction, setCounterAction] = useState(""); 
 
  useEffect(() => { 
    numb.length !== 0 && 
      setCounterNum( 
        numb.reduce(function (a, b) { 
          return a + b; 
        }) 
      ); 
  }, [numb]); 
 
  useEffect(() => { 
    setNumb(numb.map((num) => 
      (counterAction === "DELETE" && num % 2 !== 0 && num >= 0) ? 
        num = num - 1 : 
      (counterAction === "ADD" && num % 2 === 0) ? num = num + 1: num)); 
  }, [numb.length]); 
 
  const Delete = (id) => { 
    setCounterAction("DELETE"); 
    setNumb(numb.filter((num, index) => index !== id)); 
  }; 
  return ( 
    <div> 
      <div className="buttt"> 
        <button 
          onClick={() => { 
            setCounterAction("ADD"); 
            setNumb([...numb, 0]); 
          }} > 
          Add Counter
        </button> 
        <button 
          onClick={() => { 
            setNumb([]); 
            setCounterNum(0); 
          }} 
        > 
          Reset 
        </button> 
        <h2>Counters: {numb.length}</h2> 
        <h2>Value: {counter_num}</h2> 
      </div> 
      <div className="counters"> 
        {numb.map((num, index) => ( 
          <div className="count"> 
            <Counter2 
              id={index} 
              onDelete={(id) => Delete(id)} 
              onChange={(id, value) => 
                setNumb((prevState) => 
                  prevState.map((num, index) => 
                    index === id ? (num = value) : num 
                  ) 
                ) 
              } 
              defaultValue={num} 
            /> 
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 
 
export default App;