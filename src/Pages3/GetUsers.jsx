import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
const GetUsers = () => {
    let [state, setState]= useState([])
    let [thead,setThead]=useState([]);
    let navigate =useNavigate();
    // let x=()=>{
    //     navigate("/add")
    // }
    useEffect(()=>{
       let x= axios.get("http://localhost:3000/users");
       x.then(res=> {
           setState(res.data);
            setThead (Object.keys(res.data[0]).slice(0,4))
            x.catch(err=>console.log(err)
            )
    })
    },[state])
    // console.log(state);
    function deletes(id){
        axios.delete(`http://localhost:3000/users/${id}`).then(()=>{
            navigate("/")
        })
    }
    
  return (
    <table border=" ">
        <caption>
            <strong id="crud">CRUD OPERATIONS</strong>
            <button onClick={()=>navigate("/add")} id="add">Add+</button>
        </caption>
        <thead>
            <tr>
               {thead.map((x,ind) =><th key ={ind}>{x}</th>)}
               <th id="operations">Operations</th>
            </tr>
        </thead>
        <tbody>
            {state.map(res=>{
                return (
                    <tr key={res.id}>
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td>{res.username}</td>
                        <td>{res.email}</td>
                        <td>
                           <Link to={`/edit/${res.id}`}> <button id="ubtn">UPDATE</button></Link>
                            <button onClick={()=>deletes(res.id)} id="dbtn">DELETE</button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}
export default GetUsers