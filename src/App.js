import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
// const name = 'Space Pharoh'
  // const x = true

  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Walk the Dog',
          day: 'Monday',
          reminder: true,
      },
      {
          id: 1,
          text: 'Wash the dog',
          day: 'Tuesday',
          reminder: true,
      },
      {
          id: 1,
          text: 'Pet the dog',
          day: 'Thursday',
          reminder: false,
      },
      {
          id: 1,
          text: 'Feed the dog',
          day: 'Friday',
          reminder: true,
      },
      ]
  )


  return (
    <div className="container">
      <Header title='Tracker'/>
      <Tasks tasks={tasks} />

    {/* <h1> Does {name} own space </h1> */}
    {/* <h1> {x ? 'Yes' : 'No'} </h1> */}
    {/* conditional (ternary) operator  */}

    </div>
  );

  

}

export default App;