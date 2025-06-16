import './App.css'
import React from 'react'
import { useState } from "react";
import { ExpenseContext, MoneyContext } from './ComponentModel/ComponentPath';
import Header from './Clint/Header/Header';
import Right from './Clint/Right/Right';
import Left from './Clint/Left/Left';
import { Data } from './DataPath/Data';
import { useEffect } from 'react';


const App = () => {
  const [money, setMoney] = useState(() => {
    const savedMoney = localStorage.getItem('moneyData');
    return savedMoney ? JSON.parse(savedMoney) : {
      balance: 5000,
      expenses: 0
    };
  });
  
  const [transactionData, setTransactionData] = useState(() => {
    const savedExpenses = localStorage.getItem('Expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : Data;
  });

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