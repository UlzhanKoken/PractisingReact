import { use, useState } from 'react'

function Likes() {
    const [count, setCount] = useState(0)
    function increment(){
        setCount(count+1)
    }
  return (
    <>
    <h1>Task 8 Likes</h1>
        <div onClick={increment}>
        ❤️
        </div>
        <p>{count}</p>
    </>
  )
}

export default Likes
