import React from 'react'

const SearchToDo = ({search , newSearch}) => {
  return (
<form className='searchFrom' onSubmit={(e) => e.preventDefault()}>
    <input 
    type="text"
    id='searchItem'
    placeholder='search Item' 
    required
    value={search}
    onChange={(e) => {newSearch(e.target.value)
    }}
    />
</form>
  )
}

export default SearchToDo
