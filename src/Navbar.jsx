import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
     
        <Link to="/" className="text-xl font-bold text-blue-400">
          MyApp
        </Link>

      
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/Clock" className="hover:text-blue-400">Clock</Link>
          <Link to="/scroll" className="hover:text-blue-400">Scroll</Link>
          <Link to="/Form" className="hover:text-blue-400">Form</Link>
          <Link to="/Sample" className="hover:text-blue-400">Sample</Link>
          <Link to="/Important" className="hover:text-blue-400">Important</Link>
          <Link to="/User" className="hover:text-blue-400">User</Link>
          <Link to="/apidata" className="hover:text-blue-400">Api</Link>
          <Link to="/getapi" className="hover:text-blue-400">GET Api</Link>
        </div>

        <div className="md:hidden">
          <button className="text-white focus:outline-none">
          
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
