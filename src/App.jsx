import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./User";

function App() {
  const name = "Mohammad Husain";
  const displayName = name ? name : "Guest";
  const role = "admin";

  const message =
    role === "admin"
      ? "Welcome Admin"
      : role === "user"
      ? "Welcome User"
      : "Welcome Guest";

  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-md text-center">
        Welcome to My React App
      </h1>

      <h4 className="text-lg text-gray-700 mb-2">
        Current User:{" "}
        <span className="font-semibold text-black">{displayName}</span>
      </h4>

      <h4 className="text-2xl font-bold text-green-600 mb-6">{message}</h4>

      <div className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-sm">
        Count: <span className="text-blue-600">{count}</span>
      </div>

      <div className="flex gap-6 mb-8">
        <button
          type="button"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <button
          type="button"
          className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>

      {/* User Component */}
      <div className="text-lg font-medium text-gray-800 inline-flex items-center gap-2">
        props: <User name="Mohsin" />
      </div>
    </div>
  );
}
export default App;
