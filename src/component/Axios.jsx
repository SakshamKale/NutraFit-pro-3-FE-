import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axios = () => {
    const [users,setusers]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            setusers(res.data) })
        .catch(error=>{console.log(error);
        })
    },[])
  return (
    
    <div>
      <ul>
        {users.map(user=><li>{user.title}</li>)}
      </ul>
    </div>
  )
}

export default Axios
