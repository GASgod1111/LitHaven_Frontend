import React, { useState } from 'react';

function Checkout() {
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

  // State for the shipping address
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  // Handle changes in the shipping address form
  const handleShippingAddressChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  // Handle the checkout process (you can replace this with your actual payment logic)
  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Checkout initiated:', shippingAddress);
    // You may want to send the cart items and shipping address to your backend for payment processing
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
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
      <div className="mb-4">
        <h3 className="text-lg font-bold">Shipping Address</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={shippingAddress.name}
            onChange={handleShippingAddressChange}
            className="w-full py-2 px-3 border rounded-lg mb-2"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingAddress.address}
            onChange={handleShippingAddressChange}
            className="w-full py-2 px-3 border rounded-lg mb-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingAddress.city}
            onChange={handleShippingAddressChange}
            className="w-full py-2 px-3 border rounded-lg mb-2"
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={shippingAddress.state}
            onChange={handleShippingAddressChange}
            className="w-full py-2 px-3 border rounded-lg mb-2"
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={shippingAddress.zip}
            onChange={handleShippingAddressChange}
            className="w-full py-2 px-3 border rounded-lg mb-4"
          />
        </form>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:ring focus:ring-blue-300"
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
