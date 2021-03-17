import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {
// const name = 'Space Pharoh'
  // const x = true
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'File Taxes',
          day: 'Monday',
          reminder: true,
      },
      {
          id: 2,
          text: 'Mow the Lawn',
          day: 'Tuesday',
          reminder: true,
      },
      {
          id: 3,
          text: 'Business Meeting',
          day: 'Thursday',
          reminder: false,
      },
      {
          id: 4,
          text: 'Wash Car',
          day: 'Friday',
          reminder: true,
      },
      {
          id: 5,
          text: 'Clean the House',
          day: 'Saturday',
          reminder: true,
      },
      {
        id: 6,
        text: 'Bake Bread',
        day: 'Sunday',
        reminder: true,
    }
      ]
  )

  // DELETE
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // REMINDER

  const toggleReminder = (id) => {
    console.log('reminder')
    setTasks(tasks.map((task) => 
    task.id === id ? { ...task, reminder : !task.reminder} : task
    )
    )
  }

  //ADD TASKS
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} title='Tracker'/>

      {showAddTask && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? (
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder} />
      ) : ( 'No Tasks To Show'
      )}


    {/* <h1> Does {name} own space </h1> */}
    {/* <h1> {x ? 'Yes' : 'No'} </h1> */}
    {/* conditional (ternary) operator  */}

    </div>
  );

  

}

export default App;