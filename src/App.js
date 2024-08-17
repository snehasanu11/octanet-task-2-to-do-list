import React, { useState } from 'react';
import List from './List';
import Add from './Add';
import Search from './Search';
import './App.css';

function App() {
  // State to manage the list of items
  const [lists, setLists] = useState([
    { id: 1, item: 'html', checked: false },
    { id: 2, item: 'css', checked: false },
    { id: 3, item: 'javascript', checked: false }
  ]);

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState('');

  // State to manage the new item to be added
  const [newItem, setNewItem] = useState('');

  // Filtered list based on the search query
  const filteredLists = lists.filter(list =>
    list.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle checking/unchecking of list items
  const handleCheck = (id) => {
    const updatedLists = lists.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setLists(updatedLists);
  };

  // Function to handle the deletion of list items
  const handleDelete = (id) => {
    const updatedLists = lists.filter(item => item.id !== id);
    setLists(updatedLists);
  };

  // Function to handle the addition of new list items
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;

    const newList = {
      id: lists.length ? lists[lists.length - 1].id + 1 : 1,
      item: newItem,
      checked: false
    };

    setLists([...lists, newList]);
    setNewItem('');
  };

  return (
    <div className="App">
     
      <List
        lists={filteredLists}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
       <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Add newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
