import React from 'react';

// Adding default data: key/values in createContext for auto completion for vscode
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;
