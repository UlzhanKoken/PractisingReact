import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0);
  function increment(){
    setCount(count+1)
  }
  return (
    <>
        <div>
            <h1>Task 1 : Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={()=>count>1?setCount(count-1):count}>-</button>
        </div>
    </>
  )
}

export default Counter
