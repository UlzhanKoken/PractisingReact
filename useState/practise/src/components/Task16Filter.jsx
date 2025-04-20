import { useState } from "react";

function SearchList() {
  const [searchQuery, setSearchQuery] = useState("");

  const items = ["apple", "banana", "orange", "grape", "melon", "kiwi"];

  const filteredItems = items.filter((item)=>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  )


  return (
    <div>
      <h1>🍎 Поиск по списку</h1>
      <input type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
      
      <ul>
        {
            
            filteredItems.map((item)=>(
                <li>
                    {item} 🍎 
                </li>
            ))
        }
      </ul>
   
    </div>
  );
}

export default SearchList;
