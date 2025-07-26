import { useState } from "react";
import React, { useEffect} from 'react'

const GetApi = () => {

  const [User, setUser] = useState([]);

  useEffect(() => {
    Getdata();  
    }, []);

  async function Getdata(){
   const url = "https://dummyjson.com/users"; 
   let response = await fetch(url);
   let data = await response.json();
   setUser(data.users);   
}
  return (
<>
  <div >
    <h1 className='text-2xl font-bold text-center my-4'>Get Api</h1>
    {
        User.map((user) =>(
            <div key={user.id} className="border p-4 mb-4 rounded shadow">
                <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Username: {user.username}</p>
            </div>
        ))
    }
  </div>
</>
  )
}

export default GetApi