import React from 'react'

const ExpenseForm = () => {
  return (
    <form action="" className='mb-3'>
        
        <div classNam="mb-3">
            <label htmlFor='description' className='form-label'>Description</label>
            <input id="description" type="text" className='form-control' />
        </div>

        <div classNam="mb-3">
            <label htmlFor='amount' className='form-label'>Amount</label>
            <input id="amount" type="text" className='form-control' />
        </div>

        <div classNam="mb-3">
            <label htmlFor='description' className='form-label'>
                Category
            </label>
            <select name="" id="" className='form-select'>
                <option value=""></option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="groceries">Groceries</option>
            </select>

        </div>
    <button className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default ExpenseForm