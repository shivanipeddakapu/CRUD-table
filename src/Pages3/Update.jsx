import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./style.css"

const Update = () => {
    const [values, setValues] = useState({ username: "", email: "" });
    const navigate = useNavigate();

    const change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    let {id} =useParams();
    useEffect(()=>{
        axios.get("http://localhost:3000/users/"+id)
        .then(res=>setValues(res.data))
    },[id])
  function update(e){
    e.preventDefault()
    axios.put("http://localhost:3000/users/" +id,values)
    .then(()=>{
        navigate ("/")
    })
  }
    return (
        <div>
            <h1 id="addH1">Edit your Profile</h1>
            <form action=''>
            <input type="text" 
                placeholder='name'
                name="name"
                value={values.name}
                onChange={change}/>
                <input
                    type="text"
                    placeholder='Username'
                    name="username"
                    value={values.username}
                    onChange={change}
                />
                <br />
                <input
                    type="email"
                    placeholder='Email address'
                    name="email" // Change this to "email"
                    value={values.email}
                    onChange={change}
                />
                <br />
                <button onClick={update} id="ubtn">Update User</button>
            </form>
        </div>
    );
}

export default Update;