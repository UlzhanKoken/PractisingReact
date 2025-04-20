import { useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <h1>Task 1 Increment </h1>
      <p>
        {count}
      </p>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>count>0 ? setCount(count-1) : count}>-</button>
    </>
  )
}

export default Counter
