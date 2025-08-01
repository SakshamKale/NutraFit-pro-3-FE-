import React, { useRef, useState } from 'react'

const UseRef = () => {
    let myref=useRef();
    let [data,setdata]=useState("")
    function getClick() {
        myref.current.style.color="red"
        myref.current.style.backgroundColor="black";
        const d=myref.current.value;
        setdata(d);
    }
  return (
    <div>
      <input type="text" name="" id="" ref={myref} />
      <button onClick={()=>{getClick()}}>Submit</button>
      <h1>{data}</h1>
    </div>
  )
}

export default UseRef
