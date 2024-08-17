import React from 'react';

const Add = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <div className='add'>
      <form onSubmit={handleSubmit}>
        <label>Add Item:</label>
        <input 
          type="text" 
          placeholder="Enter new item" 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)} 
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Add;
