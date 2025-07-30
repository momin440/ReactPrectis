import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserApiList = () => {
    const [User, SetUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
     const url = "http://localhost:3000/users";
    useEffect(() => {
        GetAllUser();
        return () => {};
    }, []);

    async function GetAllUser() {
        setLoading(true);
       
        let response = await fetch(url);
        let data = await response.json();
        SetUser(data);
        setLoading(false);
    }   
    
    const DeleteUser=async (id) => {
      let response = await  fetch(url+"/" + id,{
        method: "DELETE",
      })
       response = await response.json();
       if(response){
        alert("User Deleted Successfully");
        GetAllUser();
       }
       else
       {
        alert("Failed to delete user");
       }
    }

    const EditUser = (id) => {
  navigate("/edituser/"+id);
    }

    return (
        <>
            <div className="max-w-3xl w-full mx-auto mt-6 bg-white shadow-lg rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800">User List</h2>
                  <Link to="/adduser"> <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full sm:w-auto">Add User</button> </Link> 
                </div>
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-10">
                        <svg className="animate-spin h-10 w-10 text-blue-600 mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                        </svg>
                        <span className="text-blue-600 font-semibold">Loading users...</span>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Gender</th>
                                    <th className="px-2 sm:px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {User.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-2 sm:px-4 py-4 text-center text-gray-500">No users found.</td>
                                    </tr>
                                ) : (
                                    User.map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-2 sm:px-4 py-2">{user.firstName}</td>
                                            <td className="px-2 sm:px-4 py-2">{user.email}</td>
                                            <td className="px-2 sm:px-4 py-2">{user.gender}</td>
                                            <td className="px-2 sm:px-4 py-2 flex flex-col sm:flex-row gap-2">
                                                <button  onClick={()=>EditUser(user.id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition w-full sm:w-auto">Edit</button>
                                                <button onClick={()=>DeleteUser(user.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition w-full sm:w-auto">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserApiList;
