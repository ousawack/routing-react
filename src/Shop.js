import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  },[]);

  const fetchItems = async () => {
    const data = await fetch(`https://rickandmortyapi.com/api/character`);

    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>{item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
