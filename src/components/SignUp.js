import React, { useState } from 'react';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with the URL of your signup API endpoint
    const signupUrl = 'https://example.com/api/signup';

    // Create a request body with user registration data
    const requestBody = {
      fullName: fullName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(signupUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Registration successful
        const userData = await response.json();
        console.log('User registered:', userData);
        // Redirect to the user's profile or another page
        // You can use React Router for this
      } else {
        // Registration failed, handle error
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sign Up for Lithaven</h2>
      <form className="max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
