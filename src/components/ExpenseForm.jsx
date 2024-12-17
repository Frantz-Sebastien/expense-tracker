import React from 'react'
import { useForm } from "react-hook-form"

const ExpenseForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()



  return (
    <form action="" className='mb-5' onSubmit={handleSubmit(data => console.log(data))}>
        
        <div classNam="mb-3">
            <label htmlFor='description' className='form-label'>Description</label>
            <input id="description" type="text" className='form-control' {...register("description", {minLength: 6, required:true} )} />
            <p>This field is required</p>
            <p>This field requires at least 6 characters</p>
        </div>

        <div classNam="mb-3">
            <label htmlFor='amount' className='form-label'>Amount</label>
            <input id="amount" type="number" className='form-control' {...register("amount", {required: true})}/>
        </div>

        <div classNam="mb-3">
            <label htmlFor='description' className='form-label'>
                Category
            </label>
            <select name="" id="" className='form-select' {...register("category", {required: true})}>
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