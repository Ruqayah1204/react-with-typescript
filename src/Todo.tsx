import {useState} from 'react'

interface Task {
    id: number;
    title: string;
    complete: boolean;
}

const Todo = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState("");

    const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if(!inputValue){
            console.log("input cannot be empty")
            return;
        }

        const newTask: Task = {
            id: tasks.length + 1,
            title: inputValue,
            complete: false,
        }

        setTasks([...tasks, newTask])
        console.log(setTasks([...tasks, newTask]))
        console.log("Task added");
        setInputValue("")
    }

    const deleteTaskHandler = (id : number) =>{
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const completeTaskHandler=(title: string) =>{
        setTasks(tasks.map((task) => task.title === title ? { ...task, complete: !task.complete } : task
            )
          );
    }

  return (
    <section>
      <form onSubmit={addTaskHandler} className='form'>
        <input type="text" 
            placeholder='enter task...' 
            onChange={(e)=>setInputValue(e.target.value)} 
            value={inputValue} 
            className='formInput'
        />
        <button className="formBtn"> Add Task</button>
      </form>
      <ol className='taskCard'>
        {
            tasks.map((task) => (
                <li key={task.id} className='taskList'>
                    <span  onClick={()=>completeTaskHandler(task.title)} 
                        className={`${task.complete? "taskTitle" : ""}`}>
                        {task.title}
                    </span>
                    <button onClick={() => deleteTaskHandler(task.id)}>X</button>
                </li>
            ))
        }
      </ol>
    </section>
  )
}

export default Todo
