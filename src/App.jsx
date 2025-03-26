import { useState } from 'react'
import './components/Bricks.css'
import './App.css'
import Cards from './components/Bricks';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card-container">
      <Cards name="darry" />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      </div>
      
    </div>

  )
}

export default App
