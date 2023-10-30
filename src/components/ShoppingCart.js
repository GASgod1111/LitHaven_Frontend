import React from 'react';

function ShoppingCart() {
  // Sample cart items (replace with actual cart items from your state)
  const cartItems = [
    {
      id: 1,
      title: 'Book 1',
      price: 15.99,
      quantity: 2,
    },
    {
      id: 2,
      title: 'Book 2',
      price: 12.99,
      quantity: 1,
    },
  ];

  // Calculate the total cost
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="mb-4">
          <p className="text-lg">{item.title}</p>
          <p className="text-gray-600">Price: ${item.price}</p>
          <p className="text-gray-600">Quantity: {item.quantity}</p>
        </div>
      ))}
      <div className="mb-4">
        <p className="text-xl font-bold">Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:ring focus:ring-blue-300"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default ShoppingCart;
