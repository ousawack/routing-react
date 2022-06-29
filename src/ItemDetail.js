import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function ItemDetail() {

  useEffect(() => {
    fetchItem();
  },[]);

  const [item, setItem] = useState({});

  const id = useParams();
//  console.log(id);

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://rickandmortyapi.com/api/character/1`);
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.image} alt=''/>
    </div>
  );
}

export default ItemDetail;