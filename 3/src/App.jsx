import React, { useEffect, useState } from 'react';
import './App.css'; 

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="item-list-container">
      <h1 className="item-list-title">Item List</h1>
      <ul className="item-list">
        {items.map(item => (
          <li key={item.id} className="item">{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
