import React, { useId } from 'react';

const UseId = () => {

  function UserForm({ index }) {
    const nameId = useId();
    const emailId = useId();

    return (
      <div className="p-4 mb-4 border rounded-lg shadow-md bg-white">
        <h4 className="text-lg font-semibold mb-3">User {index + 1}</h4>

        <div className="mb-3">
          <label htmlFor={nameId} className="block mb-1 font-medium text-gray-700">
            Name:
          </label>
          <input
            id={nameId}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor={emailId} className="block mb-1 font-medium text-gray-700">
            Email:
          </label>
          <input
            id={emailId}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    );
  }

  function RegistrationForm() {
    return (
      <div className="max-w-xl mx-auto p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2>
        <UserForm index={0} />
        <UserForm index={1} />
        <UserForm index={2} />
      </div>
    );
  }

  return <RegistrationForm />;
};

export default UseId;
