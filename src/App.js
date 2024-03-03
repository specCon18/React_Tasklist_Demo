import React, { useState } from 'react';

function ListItem({ value, onRemove }) {
  return (
    <div className="row" style={{display: 'flex', flexDirection: 'row'}}>
      <input type="checkbox" onChange={() => onRemove(value)} />
      <p>{value}</p>
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handler for input value change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handler for adding a new item
  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue(''); // Clear the input after adding
    }
  };

  // Handler for removing an item
  const handleRemoveItem = (valueToRemove) => {
    setItems(items.filter(item => item !== valueToRemove));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>TODO App</h1>
        <div className="add-item">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
      <div className="list">
        {items.map((item, index) => (
          <ListItem key={index} value={item} onRemove={handleRemoveItem} />
        ))}
      </div>
    </div>
  );
}
