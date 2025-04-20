import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("")
  const chars = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"]
  
  function handleClick(value){
      setInput((prev)=>prev+value)
  } 
  function calculateResult(){
      try{
        setInput(eval(input).toString())
      }
      catch{
        setInput("Error")
      }
  }
  
  return (
    <div className="Calculator">
       <input type="text" value={input} readOnly />
       <div className="buttons">
          {
            chars.map((char)=>(
              <button key={char} onClick={()=>(char==="=" ? calculateResult() : handleClick(char))}>{char}</button>
            ))
          }
       </div>
    </div>
  );
}

export default Calculator;
