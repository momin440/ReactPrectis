import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserApiAdd = () => {

  const [firstname, Setname] = useState();
  const [email, Setemail] = useState();
  const [gender, Setgender] = useState();
  const navigate = useNavigate();

 const createUser = async () => {
    const url = "http://localhost:3000/users";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        firstName: firstname,
        email: email,
        gender: gender,
      }),
    });

    const result = await response.json();
    console.log("User created:", result);
    navigate("/fullapi"); 
    

    // Reset form (optional)
    setName("");
    setEmail("");
    setGender("male");
  };
    return (
        <div style={{
            maxWidth: 400,
            margin: '40px auto',
            padding: 24,
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            background: '#fff'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Add New User</h2>
            <form>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 6 }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => Setname(e.target.value)}
                        style={{
                            width: '100%',
                            padding: 8,
                            borderRadius: 6,
                            border: '1px solid #ccc'
                        }}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 6 }}>Email</label>
                    <input
                        type="email"
                        name="email"
                         onChange={(e) => Setemail(e.target.value)}
                        style={{
                            width: '100%',
                            padding: 8,
                            borderRadius: 6,
                            border: '1px solid #ccc'
                        }}
                    />
                </div>
                <div style={{ marginBottom: 24 }}>
                    <label style={{ display: 'block', marginBottom: 6 }}>Gender</label>
                    <select
                        name="gender"
                        onChange={(e) => Setgender(e.target.value)}
                        style={{
                            width: '100%',
                            padding: 8,
                            borderRadius: 6,
                            border: '1px solid #ccc'
                        }}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <button
                    type="button"
                     onClick={createUser}
                    style={{
                        width: '100%',
                        padding: 10,
                        borderRadius: 6,
                        border: 'none',
                        background: '#007bff',
                        color: '#fff',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Add User
                </button>
            </form>
        </div>
    );
};

export default UserApiAdd;
