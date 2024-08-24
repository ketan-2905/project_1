import React from 'react'
import ListItem from './ListItem';

const Content = ({toDos , handleClick , handleDelete}) => {
    return (
    <>
      <ListItem
     toDos={toDos} 
     handleClick = {handleClick}
     handleDelete = {handleDelete}
      />
    </>
      )
}

export default Content