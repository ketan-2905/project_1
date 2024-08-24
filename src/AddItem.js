import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newToDo, setNewToDo , handleSubmit}) => {
  return (
<form className='addFrom' onSubmit={(e) => handleSubmit(e) }>
    <input 
    autoFocus
    type="text"
    id='addItem'
    placeholder='Add Item' 
    required
    value={newToDo}
    onChange={(e) => {setNewToDo(e.target.value)
    }}
    />



    <button
    type='submit'
    className='addItem-btn'
    >
    <FaPlus />
    </button>

</form>
  )
}

export default AddItem
