import { useState } from 'react'
function FilterByCategoryyy() {
    const library = [
        {
            id:0,
            name:"1984",
            category:"literature"
        },
        {
            id:1,
            name:"Mine Caimpf",
            category:"history"
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
      const [category, setCategory] = useState('all')
      const filteredBooks = category === "all" 
      ? library 
      : library.filter((item)=>item.category === category)
    return(
    <>
        <button onClick={()=>setCategory('all')}>All</button>
        <button onClick={()=>setCategory('history')}>History</button>
        <button onClick={()=>setCategory('development')}>Self-development</button>
        <button onClick={()=>setCategory('literature')}>Literature</button>
        <ul>
            {
                filteredBooks.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
    </>
    )

}
export default FilterByCategoryyy;
