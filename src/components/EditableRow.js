import React from 'react'

const EditableRow=(editFormData, handleEditFormChange, handleCancelClick)=>{
  return(
    <tr>
           <td>
               <input 
                   type="text"
                   required="required"
                   name="fullName"
                   value={editFormData.fullName}
                   placeholder="Enter a Name"
                   onChange={handleEditFormChange}
               />
           </td>
           <td>
              <input 
                   type="email"
                   required="required"
                   name="email"
                   value={editFormData.email}
                   placeholder="Enter an Email"
                   onChange={handleEditFormChange}
               />
           </td>
           <td>
               <input 
                   type="text"
                   required="required"
                   name="phoneNumber"
                   value={editFormData.phoneNumber}
                   placeholder="Enter a Phone Number"
                   onChange={handleEditFormChange}
               />
           </td>
           <td>
                <input 
                   type="text"
                   required="required"
                   name="address"
                   value={editFormData.address}
                   placeholder="Enter an Address"
                   onChange={handleEditFormChange}
               />
           </td>
           <td>
               <button type="submit">Save</button>
               <button type="button" onClick={handleCancelClick}>Cancel</button>

           </td>
    </tr>
  )

}

export default EditableRow