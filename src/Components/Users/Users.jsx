import { useEffect } from "react";
import { useState } from "react";
import Singleuser from "../Singleuser/Singleuser";


const Users = () => {

    const [users,Setusers]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=>Setusers(data))
    },[])
    return (
        <div>
            <h2> {users.length} </h2>
        { 
      
            users.map((user,index)=> <Singleuser
            user = {user}
            key ={index}
            ></Singleuser>)
        }
        </div>
    );
};

export default Users;