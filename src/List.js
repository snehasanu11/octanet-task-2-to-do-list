import React from 'react';
import { FaTrash } from "react-icons/fa";


const List = ({ lists, handleCheck, handleDelete }) => {
  return (
    <div>
      <h2>To-Do Lists</h2>
      <ul>
        {lists.map(list => (
          <li key={list.id}>
            <input 
              type="checkbox" 
              checked={list.checked} 
              onChange={() => handleCheck(list.id)}
            />
            {list.item}
            <FaTrash
              role="button" 
              tabIndex={0} 
              onClick={() => handleDelete(list.id)} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
