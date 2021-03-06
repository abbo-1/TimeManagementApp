import Header from './components/Header'
import Tasks from './components/Tasks'

import PropTypes from 'prop-types'

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

  
Header.propTypes = {
  color: PropTypes.string,
}
}

export default App;