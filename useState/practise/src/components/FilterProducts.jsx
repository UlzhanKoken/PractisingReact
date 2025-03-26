import { useState } from "react";

export default function FilteredList() {
    const [filter, setFilter] = useState("Все");
    const items = [
        { id: 1, name: "Яблоко", category: "Фрукты" },
        { id: 2, name: "Банан", category: "Фрукты" },
        { id: 3, name: "Морковь", category: "Овощи" },
        { id: 4, name: "Огурец", category: "Овощи" },
        { id: 5, name: "Апельсин", category: "Фрукты" },
        { id: 6, name: "Помидор", category: "Овощи" }
    ];
    

    const filteredItems = filter === "Все" ? items : items.filter(item=>item.category === filter)

    return(
        <>
          <button onClick={()=>setFilter("Все")}>Все</button>
          <button onClick={()=>setFilter("Овощи")}>Овощи</button>
          <button onClick={()=>setFilter("Фрукты")}>Фрукты</button>


          <ul>
            {filteredItems.map((item=>
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
          </ul>
        </>


    )
}