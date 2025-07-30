import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UserApiEdit = () => {

  const {id} = useParams();
  const [firstname, Setname] =useState('');
  const [email, Setemail] = useState('');
  const [gender, Setgender] = useState('');
 const url = 'http://localhost:3000/users/'+id;
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
    },[])

   const getUserData = async () => {
   
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    Setname(response.firstName);
    Setemail(response.email);
    Setgender(response.gender);
   }

   const EditUser = async () => {
     let response = await fetch(url,{
      method: "PUT",
      body: JSON.stringify({
        firstName: firstname,
        email: email,
        gender:gender
      })
     }) 
      response = await response.json();
      if(response){
       navigate("/fullapi");
       alert("User Updated Successfully");
      }
   }

  return (
    <>
        <div style={{
            maxWidth: 400,
            margin: '40px auto',
            padding: 24,
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            background: '#fff'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Edit User</h2>
            <form>
                <div style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 6 }}>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={firstname}
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
                        value={email}
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
                        value={gender}
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
                     onClick={EditUser}

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
                    Edit User
                </button>
            </form>
        </div>
    </>
  )
}

export default UserApiEdit