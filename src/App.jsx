import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from "./components/ExpenseFilter"
import ExpenseForm from "./components/ExpenseForm"
import './App.css'

function App() {

  const [expenses, setExpenses] = useState([
    {id:1, description:"2 boxes of cereal", amount: 20, category: "groceries"},
    {id:2, description:"milk", amount:4, category: "groceries"},
    {id:3, description:"ConEd", amount: 73, category: "utilities"},
    {id:4, description:"Spotify", amount: 10, category: "entertainment"},
    {id:5, description:"Netflix", amount: 16, category: "entertainment"},
  ])

  const deleteItem = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const filterItem = (ctgry) => {
    setExpenses(expenses.filter(expense => expense.category == ctgry))
  }

  return (
    <>
    <ExpenseForm />
    <ExpenseFilter filterItem = {filterItem}/>
    <ExpenseList items = {expenses} deleteItem = {deleteItem} />
    </>
  )
}

export default App
