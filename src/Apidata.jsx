import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => console.error('Error fetching:', error))
      .finally(() => {
        setLoading(false);
      });
  }

  const get = () => {
    fetchData();
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">API Data</h2>

      <div className="flex justify-center mb-8">
        <button
          onClick={get}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300"
        >
          Fetch API Data
        </button>
      </div>

    
      <div className="min-h-[400px] border border-gray-300 rounded-xl p-6 shadow-inner bg-white">
        {loading && (
          <div className="flex justify-center items-center h-full">
          
            <div id="ghost">
              <div id="red">
                <div id="pupil"></div>
                <div id="pupil1"></div>
                <div id="eye"></div>
                <div id="eye1"></div>
                <div id="top0"></div>
                <div id="top1"></div>
                <div id="top2"></div>
                <div id="top3"></div>
                <div id="top4"></div>
                <div id="st0"></div>
                <div id="st1"></div>
                <div id="st2"></div>
                <div id="st3"></div>
                <div id="st4"></div>
                <div id="st5"></div>
                <div id="an1"></div>
                <div id="an2"></div>
                <div id="an3"></div>
                <div id="an4"></div>
                <div id="an5"></div>
                <div id="an6"></div>
                <div id="an7"></div>
                <div id="an8"></div>
                <div id="an9"></div>
                <div id="an10"></div>
                <div id="an11"></div>
                <div id="an12"></div>
                <div id="an13"></div>
                <div id="an14"></div>
                <div id="an15"></div>
                <div id="an16"></div>
                <div id="an17"></div>
                <div id="an18"></div>
              </div>
              <div id="shadow"></div>
            </div>
          </div>
        )}

        {!loading && data.length > 0 && (
          <div>
            {data.map((post, index) => (
              <div
                key={post.id}
                className="mb-6 p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">#{index + 1}</h3>
                <h4 className="text-lg font-bold text-indigo-600 mb-1">{post.title}</h4>
                <p className="text-gray-600">{post.body}</p>
              </div>
            ))}
          </div>
        )}

     
        {!loading && data.length === 0 && (
          <div className="text-gray-400 text-center">
            Bhai Pahele Button Pe Click Karo Tab Data Milega.
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiData;
