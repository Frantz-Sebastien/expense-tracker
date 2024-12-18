import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ExpenseList from './components/ExpenseList'
import ExpenseFilter from "./components/ExpenseFilter"
import ExpenseForm from "./components/ExpenseForm"
import AddItemModal from "./components/AddItemModal"
import './App.css'



function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "2 boxes of cereal", amount: 20, category: "groceries" },
    { id: 2, description: "milk", amount: 4, category: "groceries" },
    { id: 3, description: "ConEd", amount: 73, category: "utilities" },
    { id: 4, description: "Spotify", amount: 10, category: "entertainment" },
    { id: 5, description: "Netflix", amount: 16, category: "entertainment" },
  ]);

  const [filterCategory, setFilterCategory] = useState('');

  const [itemModal, setItemModal] = useState(false)

  const deleteItem = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const addItem = (data) => {
    setExpenses([...expenses, { id: expenses.length + 1, ...data }]);
  };

  const filteredExpenses = filterCategory
    ? expenses.filter(expense => expense.category === filterCategory)
    : expenses;

  return (
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
      onClick={() => setItemModal(true)}>
      Add Transaction
      </button>
      {itemModal && <AddItemModal closeModal={setItemModal} addExpense={addItem}/>}
      {/* <ExpenseForm addExpense={addItem} /> */}
      <ExpenseFilter filterItem={setFilterCategory} />
      <ExpenseList items={filteredExpenses} deleteItem={deleteItem} />
    </>
  );
}

export default App;

