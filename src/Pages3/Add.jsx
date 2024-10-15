import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
    const [values, setValues] = useState({name:" ", username: "", email: "" });
    const navigate = useNavigate();

    const change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function adduser(e){
        e.preventDefault();
        axios.post("http://localhost:3000/users", values).then(() => {
            navigate("/");
        });
    }

    return (
        <div>
            <h1 id="addH1">Add a new User</h1>
            <form onSubmit={adduser}>
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
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default Add;