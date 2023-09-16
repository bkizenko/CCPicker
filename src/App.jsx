import { useState } from 'react'
import { Link } from 'react-reacter-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [creditScoreRange, setCreditScoreRange] = useState('')

  const handleChange = (e) => {
    setCreditScoreRange(e.target.value)
  }

  return (
    <>
      <div> 
        something cool
        <h1> Credit Card Picker </h1>
        <div> 
          <p> What is your credit score? </p>
          < select name = "creditScoreRange" id = "creditScoreRange" onChange={handleChange}>
            <option value="Excellent, 800-850"> 800-850 </option>
            <option value="Very Good, 740-799"> 740-799</option>
            <option value="Good, 670-739"> 670-739 </option>
            <option value="Fair, 580-669">580 to 669 </option>
            <option value="Poor, 300-579">300-579 </option>
          </select>
        </div>
        < p> The selected credit score range is: {creditScoreRange}</p>
        < Link to ="/results">Results</Link>
      </div>
    </>
  )
}

export default App
