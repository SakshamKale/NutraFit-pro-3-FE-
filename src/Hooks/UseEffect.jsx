import { useState } from "react"
import { useEffect } from "react"
export function UseEffect() {
    let bookname="hary"
    let fq=100
    let [price,setp]=useState(100)
    let [qua,setq]=useState(1);
 useEffect(()=>{
    setp(qua*fq)},[qua])
    return<>
    <h1>name:{bookname}</h1>
    <h1>Price:{price}</h1>
    <h1>Quantity:{qua}</h1>
   
    <button onClick={()=>{setq(qua+1)}}>Add</button>
    <button onClick={()=>{setq(qua-1)}}>Remove</button>
    </>
}