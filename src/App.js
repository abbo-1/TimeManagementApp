import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
// const name = 'Space Pharoh'
  // const x = true

  return (
    <div className="container">
      <Header title='Tracker'/>
      <Tasks />

    {/* <h1> Does {name} own space </h1> */}
    {/* <h1> {x ? 'Yes' : 'No'} </h1> */}
    {/* conditional (ternary) operator  */}
    
    </div>
  );
}

export default App;