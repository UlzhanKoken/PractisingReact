import { useState } from 'react'

function FilterByCategory() {
  
  const library = [
    {
        id:0,
        name:"1984",
        category:"literature"
    },
    {
        id:1,
        name:"Mine Caimpf",
        category:"History"
    },
    {
        id:3,
        name:"Paradox",
        category:"development"
    },
    {
        id:4,
        name:"Atomic Habits",
        category:"development"
    }
  ]
  const [category, setCategory] = useState("All")
  const filteredBooks = category === "All"
        ? library
        : library.filter((book)=>book.category === category)
  return (
    <>
        <h1>Task 7 Library </h1>
        <button onClick={()=>setCategory("All")}>All</button>
        <button onClick={()=>setCategory("History")}>History</button>
        <button onClick={()=>setCategory("development")}>Self-development</button>
        <button onClick={()=>setCategory("literature")}>Literature</button>

        <ul>
            {
                filteredBooks.map((book)=>(
                    <li key={book.id}>
                        {book.name}
                    </li>
                ))
            }
        </ul>
    </>
  )
}


export default FilterByCategory
