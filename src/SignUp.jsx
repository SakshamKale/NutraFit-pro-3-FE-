import React from 'react'
import { useState } from 'react';
import { obj } from './data';
function SignUp(){
    let [usern, setu] = useState("");
        
        let [pass, setp] = useState("");
    const [store, setStore] = useState(obj);
        function hAdle(e) {
          setu(e.target.value);
        }
        
        function hSubmit(e) {
          e.preventDefault();
          let co=Object.keys(obj).length;
            co=co+1;
           const newData = {
      ...store,
      [co]: {
        fsern: usern,
        fpass: pass,
      }
    };
    setStore(newData)
        }
    
        function hAdlePass(e) {
          setp(e.target.value);
        }
    
  return (
    <div>
      <div className="form-container">
        <h1>SingUp</h1>
        <form className="login-form" onSubmit={hSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Create Username"
            onChange={hAdle}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Create Password"
            onChange={hAdlePass}
            
          />
          <input
            className="submit-btn"
            type="submit"
            value="SignUp"
          />
        </form>
        {/* <h1 className="message">{sub}</h1> */}
      </div>
    </div>
  )
}

export default SignUp
