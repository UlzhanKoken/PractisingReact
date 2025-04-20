import { useState } from 'react'

function Todo() {
  const [tasks, setTasks] = useState([]);

  const [task, setTask] = useState("");
  
   

    function addTask(){
        if(task.trim()){
            setTasks([...tasks, task])
            setTask("")
        }
    }

    function deleteTask(index){
        setTasks(tasks.filter((_, i)=> i!==index))
    }

  return (
    <>
        <h1>Task 4 - 5 Add Task and Delete task</h1>
       <input type="text " value={task} 
       onChange={(e)=>setTask(e.target.value)} />
    
       <button onClick={addTask}>add task</button>
        <ul>
            {
                tasks.map((task, index)=>(
                    <li key={index}>
                        {task}
                        <button onClick={()=>deleteTask(index)}>❌</button>
                    </li>
                ))
            }
        </ul>



    </>
  )
}

export default Todo
