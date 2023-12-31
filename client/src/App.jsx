import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
const CreditCard = (minCredit, name, fees, feature) => {
  return { minCredit, name, fees, feature };
};

function App() {
  const [creditScore, setCreditScore] = useState('');
  const [income, setIncome] = useState('');
  const [ccFirst, setCCFirst] = useState('');
  const [maxFees, setMaxFees] = useState('');
  const [features, setFeatures] = useState('');
  const [creditcard, setCreditCard] = useState('');


  // visbility
  const [creditScoreVisible, setCreditScoreVisible] = useState(true);
  const [incomeVisible, setIncomeVisible] = useState(false);
  const [ccFirstVisible, setCCFirstVisible] = useState(false);
  const [maxFeesVisible, setMaxFeesVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [creditCardVisible, setCreditCardVisible] = useState(false);

  const handleChange = (e) => {
    setCreditScore(e.target.value);
  }; 

  const handleChange2 = (e) => {
    if (income != ' ') {
      setIncome(e.target.value);
    }
  };
  
  const handleChange3 = (e) => {
      setCCFirst(e.target.value);
  };

  const handleChange4 = (e) => {
    setMaxFees(e.target.value);
  };

  const handleChange5 = (e) => {
    setFeatures(e.target.value);
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

  const savemaxFees = () => {
    console.log('maxFees Saved', maxFees);
  }

  const saveFeatures = () => {
    console.log('features Saved', features);
  }



  const handleDeleteCreditScore = () => {
    setCreditScoreVisible(false);
    setIncomeVisible(true);
  }

  const handleDeleteIncome = () => {
    setIncomeVisible(false);
    setCCFirstVisible(true);
  }

  const handleDeleteCCFirst = () => {
    setCCFirstVisible(false);
    setMaxFeesVisible(true);
  }
  
  const handleDeleteMaxFees = () => {
    setMaxFeesVisible(false);
    setFeaturesVisible(true);
  }

  const handleDeleteFeatures = () => {
    setFeaturesVisible(false);
    const a = CreditCard(670, "Chase Freedom Unlimited", 0, "Travel");
    const b = CreditCard(670, "Discover it Cash Back", 0, "Dining");
    const c = CreditCard(580, "Citi Double Cash Card", 0, "Groceries");
    const d = CreditCard(580, "Capital One Quicksilver Cash Rewards", 39, "Dining");
    const e = CreditCard(300, "Capital One Platinum Secured Cash Rewards Credit Card", 0, "Groceries");
    const f = CreditCard(0, "Bank Americard Secure Credit Card", 0, "Groceries");
    const g = CreditCard(580, "Discover it Student Chrome", 0, "Gas");
    const h = CreditCard(670, "Hilton Honors American Express Card", 0, "Groceries");
    const i = CreditCard(670, "Hilton Honors American Express Card", 0, "Gas");
    const j = CreditCard(740, "Costco Anywhere Card", 0, "Gas");
    

    if(creditScore < 300 || ccFirst == "Yes"){
      setCreditCard("You only qualify for the Bank Americard Secure Credit Card");
    }else if(creditScore < 580 || income == 0){
      setCreditCard("You qualify for the Capital One Platinum Secured Cash Rewards Credit Card, enjoy the cash back!");
    }else if(creditScore < 670){
      if(features == "Groceries"){
        setCreditCard("You qualify for the Citi Double Cash Card, enjoy the cash back!");
      }else if(features == "Gas"){
        setCreditCard("You qualify for the Discover it Student Chrome, enjoy the cash back!")
      }else{
        setCreditCard("You qualify for the Capital One Quicksilver Cash Rewards, enjoy the cash back!");
      }
    }else if(features == "Travel"){
      setCreditCard("You qualify for the Chase Freedom Unlimited, enjoy the miles!");
    }
    else if(features == "Dining"){
      setCreditCard("You qualify for the Discover it Cash Back, enjoy the cash back!");
    }else if(creditScore> 670 && features == "Gas"){
      setCreditCard("You qualify for the Costco Anywhere Card, enjoy the cash back!");
    }else{
      setCreditCard("You qualify for the Hilton Honors American Express Card, enjoy the cash back!");
    }
    setCreditCardVisible(true);
  }
  
  const handleDeleteCreditCard = () => {
    setCreditScore('');
    setIncome('');
    setCCFirst('');
    setMaxFees('');
    setFeatures('');
    setCreditCard('');
    setCreditCardVisible(false);
    setCreditScoreVisible(true);
  }

  return (
    <>
    <Navbar />
      <h1> Credit Card Matcher </h1>
        {creditScoreVisible && (
          <div>
            <p className="cscoreq"> What is your credit score? </p>
            <input
              className = "cscoretextbox"
              type="text"
              name="creditScore"
              id="creditScore"
              onChange={handleChange}
              value={creditScore}
            />
            < button className = "cscore-btn" onClick = {saveCreditScore}> Save </button>
            <button className = "cscore-delete-btn" onClick={handleDeleteCreditScore}> Next </button>
            <div className="cscorea">
        Your credit score is: {creditScore}
      </div>  
          </div>
        )}
      {incomeVisible && (
      <div> 
        <p className="incomeq"> What is your income? </p>
        < input
          className = 'incometextbox' 
          type="text"
          name="income"
          id="income"
          onChange={handleChange2}
          value={income}
        /> 
        <button className = "income-btn" onClick = {saveIncome}> Save </button>
        <button className = "income-delete-btn" onClick={handleDeleteIncome}> Next </button>
        <div className="incomeAnswer">
         Your income  is: {income}
        </div>
      </div>
      )}
    {ccFirstVisible && (
    <div> 
      < p className="ccfirstq"> Is this your first credit card? (Type 'Yes' or 'No') </p>
      <div className="ccfirsta">
      <input
          type="text"
          name="ccFirst"
          id="ccFirst"
          onChange={handleChange3}
          value={ccFirst}
        />
      < button className = "ccfirstbtn" onClick = {saveccFirst}> Save </button>
      <button className = "ccfirst-delete-btn" onClick={handleDeleteCCFirst}> Next </button>
      </div>
      <p className = "ccFirstanswer">This if your first CC: {ccFirst}  </p> 
    </div>
    )}

    {maxFeesVisible && (
    <div> 
    < p className = "feesQ" > What is the max amount you are willing to spend on annual fees? </p>
     <input
          className = "feestextbox"
          type="text"
          name="maxFees"
          id="maxFees"
          onChange={handleChange4}
          value={maxFees}
      />
      < button className = "maxfees-btn" onClick = {savemaxFees}> Save </button>
      < button className = "fees-delete-btn" onClick={handleDeleteMaxFees}> Next </button>
      <p className = "feesA "> This is the max amount you can spend on fees: {maxFees}  </p> 

    </div>
    )}
    {featuresVisible && (
    <div> 
      < p className = "featuresQ" > What do you spend the most on? </p>
     <select
          className = "featuresoptions"
          type="text"
          name="features"
          id="features"
          onChange={handleChange5}
          value={features}
        >
          <option value="travel">Travel</option>
          <option value="gas">Gas</option>
          <option value="groceries">Groceries</option>
          <option value="dining">Dining</option>

          </select>
      < button className = "features-btn" onClick = {saveFeatures}> Save </button>
      < button className = "features-delete-btn" onClick={handleDeleteFeatures}> Next </button>

      <p className = "featuresA "> These are the features you selected: {features} </p> 
      </div>
    )}
    {creditCardVisible && (
    <div> 
       <input
              className = "cctextbox"
              type="textarea"
              name="creditcard"
              id="creditcard"
              readOnly = {true}
              value={creditcard}
            />
        < button className = "creditcard-delete-btn" onClick={handleDeleteCreditCard}> Reset </button>

    </div>
    )}
    </>

  );
}



// handle change4 
// max fees 

export default App;


// first credit card?
//  preferences: travel, groceries, gas
// idk some other one


// rank by number of points
// cards available now, things to do to increase ur credit score to get better cards
// notifications/updates to keep you on track for your financial goals
