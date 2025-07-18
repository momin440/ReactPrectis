import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(0);
  const [color, setColor] = useState("white");
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-800 drop-shadow-md">
          Current Time
        </h2>
        <select
          className="mb-4 px-6 py-3 rounded-xl shadow-md text-gray-800 border border-gray-300 bg-white 
             focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 
             hover:border-blue-400 hover:shadow-lg"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        >
          <option
            className="bg-white text-black hover:bg-blue-100"
            value="white"
          >
            White
          </option>
          <option
            className="bg-white text-red-600 hover:bg-red-100"
            value="red"
          >
            Red
          </option>
          <option
            className="bg-white text-green-600 hover:bg-green-100"
            value="lime"
          >
            Lime
          </option>
          <option
            className="bg-white text-cyan-600 hover:bg-cyan-100"
            value="cyan"
          >
            Cyan
          </option>
          <option
            className="bg-white text-yellow-600 hover:bg-yellow-100"
            value="yellow"
          >
            Yellow
          </option>
        </select>

        <div
          className="shadow-xl transition-transform hover:scale-105"
          style={{
            color: color,
            width: "120px",
            backgroundColor: "#000",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <p className="text-xl text-center tracking-widest">{time}</p>
        </div>
      </div>
    </>
  );
};

export default Clock;
