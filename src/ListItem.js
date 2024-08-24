import React from 'react'
import ItemList from './ItemList'

const ListItem = ({toDos , handleClick , handleDelete}) => {
  return (
   <ul>
     {toDos.map((toDo) => (
        <ItemList 
        toDo={toDo} 
        handleClick = {handleClick}
        handleDelete = {handleDelete}
        />
  ))}
   </ul>
  )
}

export default ListItem
