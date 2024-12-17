import React from 'react'

const ExpenseList = ({items}) => {
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
    { items.map((item) => <tr>
     
     <td>{item.description}</td>
     <td>${item.amount}</td>
     <td>{item.category}</td>
   </tr>)
   }

   <tr>
    <td><h3>Total</h3></td>
    <td><h3>{}</h3></td>
   </tr>
    
   
  </tbody>
</table>
    </div>
  )
}

export default ExpenseList