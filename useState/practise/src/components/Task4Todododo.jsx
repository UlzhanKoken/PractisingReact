import { useState } from 'react'
export default function Tododo() {
    const [tasks, setTasks] = useState(["wake up"])
    const [task, setTask] = useState("")
    function addTask(){
        setTasks([...tasks, task])
        setTask("")
    }
    function deleteItem(index){
        setTasks(tasks.filter((_,i)=>i!==index))
    }
    return(
      <>
        <h1>Todo</h1>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={()=>addTask()}>add task</button>

        <ul>
            {
                tasks.map((task, index)=>(
                    <li key={index}>
                        {task}
                        <button onClick={()=>deleteItem(index)}>❌</button>
                    </li>
                ))
            }
        </ul>
      </>
    )
}