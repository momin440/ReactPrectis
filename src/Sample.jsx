import { useState } from "react";
import React from 'react'

const Sample = () => {

  const [username, SetUsername] = useState([
    "mohsin", "Mohammad", "ahesan"
  ]);

  const setUsername = (e) => {
    const newUsername = e.target.previousSibling.value;
   
      SetUsername([
      ...username.slice(0, -1),
      newUsername
      ]);
      e.target.previousSibling.value = "";
 
  }

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-slate-950">
      <div className="mt-24 bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Enter Username</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <button onClick={setUsername} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Submit
        </button>
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2">Usernames:</h3>
          <ul className="list-disc pl-5">
            {username.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sample