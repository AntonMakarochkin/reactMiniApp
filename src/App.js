import { useState} from 'react'
import TodoList from './Modules/TodoList'
import Tasks from './Modules/Tasks'
import AddTasks from './Modules/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'1000 ₽',
        day:'19 мая',
        reminder: true,
    },
    {
        id:2,
        text:'5000 ₽',
        day:'18 мая',
        reminder: false,
    },
    {
        id:3,
        text:'700 ₽',
        day:'7 мая',
        reminder: false,
    },
])
// AddTask
const addTask = (task) => {
 const id = Math.floor(Math.random() * 10000 + 1)
 console.log(id)
 const newTask = {id, ...task}
 setTasks([...tasks, newTask])
}

// deleteTask
const deleteTask = (id) => {
 setTasks(tasks.filter((task) => task.id !==id))
}

//Togle reminder
/* const toggleReminder = (id) => {
 setTasks(
   tasks.map((task) => 
   task.id === id ? { ...taks, reminder :
   !task.reminder} : task
   )
 )
} */



  return (
    <div className="wrapper">
      <TodoList onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTasks onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'Денег нет'}
    </div>
  );
}

export default App;
