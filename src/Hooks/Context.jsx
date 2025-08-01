
import React, { createContext, useContext } from 'react'
const mycontest=createContext();
const Context = () => {
 let num=50;
  return (
    <mycontest.Provider value={num}>
    <div>
      <Fun1/>
    </div>
    </mycontest.Provider>
  )
}

function Fun1() {
   return <Fun2/>
}
function Fun2() {
   return <Fun3/>
}
function Fun3() {
   return <Fun4/>
}
function Fun4() {
  let num1=useContext(mycontest)
    return <h1>{num1}</h1>
}
export default Context
