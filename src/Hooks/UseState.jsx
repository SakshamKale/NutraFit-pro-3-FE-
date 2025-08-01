import { useState } from "react"
export function UseState() {
    let [count,setc]=useState(0);
    return(<>
    <h1>Count:{count}</h1>
    <button onClick={()=>{setc(count+1)}}>Add</button>
    <button onClick={()=>{
        if(count>0)
         setc(count-1)
    else{
         setc(0)
    }
    }}>Remove</button>
    </>
    )
}