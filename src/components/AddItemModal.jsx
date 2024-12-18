import { useState } from 'react'
import { useForm } from "react-hook-form"

const AddItemModal = ({closeModal, addExpense}) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

  return (

    <>
    
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
        </div>

        <div className="title">
        <form action="" className='mb-5' onSubmit={handleSubmit((data) => {addExpense(data); reset()})}>
        
        <div className="mb-3">
            <label htmlFor='description' className='form-label'>Description</label>
            <input id="description" type="text" className='form-control' {...register("description", {minLength: 6, required:true} )} />
            {errors.description?.type == "required" && <p className='text-danger'>This field is required</p>}
            {errors.description?.type == "minLength" && <p className='text-danger'>This field requires at least 6 characters</p>}
            
        </div>

        <div className="mb-3">
            <label htmlFor='amount' className='form-label'>Amount</label>
            <input id="amount" type="number" className='form-control' {...register("amount", {required: true})}/>
            {errors.amount?.type == "required" && <p className='text-danger'>This field is required</p>}
        </div>

        <div className="mb-3">
            <label htmlFor='description' className='form-label'>
                Category
            </label>
            <select name="" id="" className='form-select' {...register("category", {required: true})}>
                <option value=""></option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="groceries">Groceries</option>
            </select>
            {errors.category?.type == "required" && <p className='text-danger'>This field is required</p>}

        </div>
    <button className='btn btn-primary'>Submit</button>
    </form>
        </div>

        <div className='body'>
            <p>The next page looks amazing. Hope you want to go there</p>
        </div>

        <div className='footer'>
            <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
        </div>


    </div>

    </>
   
  )
}

export default AddItemModal


// <!-- Modal -->
// <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>