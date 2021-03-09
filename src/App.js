import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
// const name = 'Space Pharoh'
  // const x = true

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
          text: 'Grocery Shopping',
          day: 'Friday',
          reminder: true,
      },
      {
          id: 5,
          text: 'Give Dog a Bath',
          day: 'Saturday',
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
    console.log(id)
  }

  return (
    <div className="container">
      <Header title='Tracker'/>
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