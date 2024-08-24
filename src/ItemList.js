import React from 'react'
import { FaTrash } from 'react-icons/fa';

const ItemList = ({toDo , handleClick , handleDelete}) => {
  return (
        <li key={toDo.id} className="to-do">
          <input
            type="checkbox"
            checked={toDo.checked}
            onChange={() => handleClick(toDo.id)}
          />
          <label style={toDo.checked ? { textDecoration: "line-through" } : null}>
            {toDo.item}
          </label>
          <FaTrash onClick={() => handleDelete(toDo.id)} className="trash" />
        </li>
      );
    };

export default ItemList
