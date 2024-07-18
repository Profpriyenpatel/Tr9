import React, { useState } from 'react';

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setTotal(total - items[index].price);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Rs.{item.price}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total}</h2>
      <button onClick={() => addItem({ name: 'Apple', price: 100 })}>Add Apple</button>
      <button onClick={() => addItem({ name: 'Banana', price: 50 })}>Add Banana</button>
    </div>
  );
};

export default ShoppingCart;
