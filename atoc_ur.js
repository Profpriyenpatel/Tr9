import React, { useReducer } from 'react';

const initialState = {
  items: [],
  total: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.item],
        total: state.total + action.item.price,
      };
    case 'REMOVE_ITEM':
      const newItems = state.items.filter((_, index) => index !== action.index);
      return {
        items: newItems,
        total: state.total - state.items[action.index].price,
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', index });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            {item.name} - Rs.{item.price}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: Rs.{state.total}</h2>
      <button onClick={() => addItem({ name: 'Apple', price: 100 })}>Add Apple</button>
      <button onClick={() => addItem({ name: 'Banana', price: 50 })}>Add Banana</button>
    </div>
  );
};

export default ShoppingCart;
