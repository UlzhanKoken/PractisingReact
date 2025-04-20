import { useState } from "react";

export default function Tabs(){
   const [activeTab, setActiveTab] = useState("Tab1")

    return(
        <>
            <h1>🧩 Вкладки (Tabs)</h1>
            <button onClick={()=>setActiveTab("Tab1")}>tab 1</button>
            <button onClick={()=>setActiveTab("Tab2")}>tab 2</button>
            <button onClick={()=>setActiveTab("Tab3")}>tab 3</button>
    
            {activeTab==="Tab1" && <p>tab1</p>}
            {activeTab==="Tab2" && <p>tab2</p>}
            {activeTab==="Tab3" && <p>tab3</p>}
            
        </>
    )
}