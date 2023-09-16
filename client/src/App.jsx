import React, { useState } from 'react';

function App() {
  const [creditScore, setCreditScore] = useState('');
  const [income, setIncome] = useState('');

  const handleChange = (e) => {
    setCreditScore(e.target.value);
  };

  const handleChange2 = (e) => {
    if (income != ' ') {
      setIncome(e.target.value);
    }
  };
  return (
    <>
      <h1> Credit Card Picker </h1>
      <div>
        <p className="cscoreq"> What is your credit score? </p>
        <input
          type="text"
          name="creditScore"
          id="creditScore"
          onChange={handleChange}
          value={creditScore}
        />
        <p> What is your income? </p>
        < input 
          type="text"
          name="income"
          id="income"
          onChange={handleChange2}
          value={income}

        /> 
      </div>
      <div className="cscorea">
        Your credit score is: {creditScore}
      </div>
      <div className="incomeAnswer">
        Your income  is: {income}
      </div>
    </>
  );
}

export default App;
