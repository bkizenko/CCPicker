import React, { useState } from 'react'
import './App.css'
import Navbar from "./Navbar"

function App() {
  const [creditScoreRange, setCreditScoreRange] = useState('')

  const handleChange = (e) => {
    setCreditScoreRange(e.target.value)
  }

  return (
    <>
      <Navbar />
      <div> 
        something cool
        <h1> Credit Card Picker </h1>
        <div> 
          <p> What is your credit score? </p>
          < select name = "creditScoreRange" id = "creditScoreRange" onChange={handleChange}>
            <option value="Excellent, 800-850"> 800-850 </option>
            <option value="Very Good, 740-799"> 740-799 </option>
            <option value="Good, 670-739"> 670-739 </option>
            <option value="Fair, 580-669"> 580-669 </option>
            <option value="Poor, 300-579"> 300-579 </option>
          </select>
        </div>
      </div>
    </>
  )
}

export default App
