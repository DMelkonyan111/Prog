import React, {useState} from 'react'

function ToDoList() {
    let [tasks, setTasks] = useState(['Take a shower', 'Walk the dog'])
    let [newTask, setNewTask] = useState('')

    function handleNewTask(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        setTasks(t => [...t, newTask])
        setNewTask('')
    }

    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index))
    }

    function moveUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks]

            let a = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index - 1]
            updatedTasks[index - 1] = a

            setTasks(updatedTasks)
        }
    }

    function moveDown(index) {
        if (index != tasks.length - 1) {
            const updatedTasks = [...tasks]

            let a = updatedTasks[index]
            updatedTasks[index] = updatedTasks[index + 1]
            updatedTasks[index + 1] = a
            
            setTasks(updatedTasks)
        }
    }

    return (
        <div className="to-do-box">
            <h1>To-Do List</h1>
            
            <div className="input-row">
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleNewTask}/>
                <button onClick={addTask}>Add</button>
            </div>

            <div className="tasks">
                {tasks.map((el, index) => {
                    return (
                        <div className="task" key={index}>
                            <div className="task-name">
                                <p>{el}</p>
                            </div>

                            <button className='delete' onClick={() => deleteTask(index)}>Delete</button>
                            <button onClick={() => moveUp(index)}>Up</button>
                            <button onClick={() => moveDown(index)}>Down</button>
                        </div>
                    )
                })}

                
                {/* <div className="task">
                    <div className="task-name">
                        <p>Take a shower</p>
                    </div>

                    <button className='delete'>Delete</button>
                    <button>Up</button>
                    <button>Down</button>
                </div> */}
            </div>
        </div>
    )
}

export default ToDoList