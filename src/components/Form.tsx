import React, { useState } from 'react'

const Form = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Handle the form submission logic here
      console.log({ email, password });
  };


  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 px-10 min-h-screen items-center">
          <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
              </label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
              />
          </div>
          <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
              </label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  required
              />
          </div>
          <div>
              <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                  Sign Up
              </button>
          </div>
      </form>
    </>
  );
};

export default Form