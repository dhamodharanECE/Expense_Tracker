import './App.css'
import React from 'react'
import { useState } from "react";
import Right from './Clint/Right/Right';
import Left from './Clint/Left/Left';
import { Data } from './DataPath/Data';
import { ExpenseContext, MoneyContext } from './ComponentModel/ComponentPath';
import Header from './Clint/Header/Header';




const App = () => {
  const [money, setMoney] = useState({
    balance: 3800,
    expenses: 1200
  })
   const [transactionData, setTransactionData] = useState(Data);
  
    const Money = JSON.stringify(money);
    localStorage.setItem("Income", Money);
    sessionStorage.setItem("Income", Money);
    const Expenses = JSON.stringify(transactionData);
    localStorage.setItem("Expenses", Expenses);
    sessionStorage.setItem("Expenses", Expenses);


  return (
   <main>
    <MoneyContext.Provider value={[money, setMoney]}>
      <ExpenseContext.Provider value={[transactionData, setTransactionData]}>
       <Header />
      <Left balance={money.balance} expenses={money.expenses} />
      <Right transactionData={transactionData} />
      </ExpenseContext.Provider>
    </MoneyContext.Provider>
    
   </main>
  )
}

export default App;