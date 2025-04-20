import { useState } from "react";

function Numbers(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [text, setText]  = useState(true)
    function handleText(){
        setText(prev=>!prev)
    }
    return(
        <>
            <h1>Task 13</h1>
            <input type="number" onChange={(e)=>setNum1(parseFloat(e.target.value) || 0)} value={num1}/>
            <input type="number" onChange={(e)=>setNum2(parseFloat(e.target.value)|| 0)} value={num2}/>
            <p>{num1+num2}</p>


            <h1>Task 14</h1>
            <button onClick={handleText}>{text?"hello" : "goodbye"}</button>
        </>
    )
}

export default Numbers