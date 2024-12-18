import { useState } from 'react'

const AddItemModal = ({closeModal}) => {

  return (

    <>
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
        </div>

        <div className="title">
            <h1>Are you sure you want to Continue?</h1>
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