import React, { useState } from 'react';

function App() {
  const [creditScore, setCreditScore] = useState('');
  const [income, setIncome] = useState('');
  const [ccFirst, setCCFirst] = useState('');

  const handleChange = (e) => {
    setCreditScore(e.target.value);
  };

  const handleChange2 = (e) => {
    if (income != ' ') {
      setIncome(e.target.value);
    }
  };

  const handleChange3 = (e) => {
    if (income != ' ') {
      setCCFirst(e.target.value);
    }
  };

  const saveCreditScore = () => {
    console.log('Credit Score Saved', creditScore);
  }

  const saveIncome = () => {
    console.log('Income Saved', income);
  }

  const saveccFirst = () => {
    console.log('CCFirst Saved', ccFirst);
  }
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
        < button onClick = {saveCreditScore}> Save </button>
        <p> What is your income? </p>
        < input 
          type="text"
          name="income"
          id="income"
          onChange={handleChange2}
          value={income}
        /> 
        < button onClick = {saveIncome}> Save </button>
      </div>
      <div className="cscorea">
        Your credit score is: {creditScore}
      </div>
      <div className="incomeAnswer">
        Your income  is: {income}
      </div>
      < p className="ccfirstq"> Is this your first credit card? (Type 'Yes' or 'No') </p>
      <div className="ccfirsta">
      <input
          type="text"
          name="ccFirst"
          id="ccFirst"
          onChange={handleChange3}
          value={ccFirst}
        />
      < button onClick = {saveccFirst}> Save </button>
      </div>
      <p className = "ccFirstanswer">This if your first CC: {ccFirst}  </p> 

    </>
  );
}


export default App;


// first credit card?
//  preferences: travel, groceries, gas
// idk some other one
