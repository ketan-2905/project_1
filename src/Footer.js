import React from 'react'

const Footer = ({ toDos }) => {
  return (
<footer>
  
{(toDos.length === 1) ? 
<h2>{toDos.length} To-Do left</h2> 
:
<h2>{toDos.length} To-DoS left</h2> }
    
</footer>
  )
}

export default Footer
