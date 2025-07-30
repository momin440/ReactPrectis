import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">
          MyApp
        </Link>
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:bg-blue-600 px-3 py-2 rounded transition">Home</Link>
          <Link to="/Clock" className="hover:bg-blue-600 px-3 py-2 rounded transition">Clock</Link>
          <Link to="/scroll" className="hover:bg-blue-600 px-3 py-2 rounded transition">Scroll</Link>
          <Link to="/Form" className="hover:bg-blue-600 px-3 py-2 rounded transition">Form</Link>
          <Link to="/Sample" className="hover:bg-blue-600 px-3 py-2 rounded transition">Sample</Link>
          <Link to="/Important" className="hover:bg-blue-600 px-3 py-2 rounded transition">Important</Link>
          <Link to="/apidata" className="hover:bg-blue-600 px-3 py-2 rounded transition">Api</Link>
          <Link to="/getapi" className="hover:bg-blue-600 px-3 py-2 rounded transition">GET Api</Link>
          <Link to="/fullapi" className="hover:bg-blue-600 px-3 py-2 rounded transition">FUll APi Work</Link>
          <Link to="/chatgpt" className="hover:bg-blue-600 px-3 py-2 rounded transition">ChatGpt</Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2 bg-blue-800 rounded shadow-lg">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <Link to="/" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/Clock" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>Clock</Link>
            <Link to="/scroll" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>Scroll</Link>
            <Link to="/Form" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>Form</Link>
            <Link to="/Sample" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>Sample</Link>
            <Link to="/Important" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>Important</Link>
            <Link to="/apidata" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>Api</Link>
            <Link to="/getapi" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>GET Api</Link>
            <Link to="/fullapi" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>FUll APi Work</Link>
            <Link to="/chatgpt" className="hover:bg-blue-600 px-3 py-2 rounded transition" onClick={() => setOpen(false)}>ChatGPT</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
