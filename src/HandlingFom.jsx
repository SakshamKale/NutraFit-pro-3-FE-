import React, { useState } from 'react';
import './HandlingForm.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function HandlingFom() {
  const [users, setUsers] = useState({
    1: { fsern: "saksham@123", fpass: "sak123" },
    2: { fsern: "aayush@123", fpass: "aay123" },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/signup" element={<SignUp users={users} setUsers={setUsers} />} />
      </Routes>
    </BrowserRouter>
  );

  function Button() {
    return (
      <div>
        <a href="/login"><button className='submit-btn'>Login</button></a>
        <a href="/signup"><button className='submit-btn'>Sign Up</button></a>
      </div>
    );
  }

  function Login({ users }) {
    const [usern, setUsern] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");
 const nav = useNavigate();
function creteAcc(){
  nav("/signup")
}
   
    function hSubmit(e) {
      e.preventDefault();
      let success = false;
      Object.keys(users).forEach((key) => {
        if (users[key].fsern === usern && users[key].fpass === pass) {
          success = true;
        }
      });
      setMsg(success ? "Login Successful" : "Password and username do not match");
    }

    return (
      <div className="form-container">
        <h1>Login</h1>
        <form className="login-form" onSubmit={hSubmit}>
          <input className="input-field" type="text" placeholder="Username" onChange={(e) => setUsern(e.target.value)} />
          <input className="input-field" type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
          <button className="link-btn" onClick={creteAcc}>Create account</button>

          <input className="submit-btn" type="submit" value="Login" />
        </form>
        <h1 className="message">{msg}</h1>
      </div>
    );
  }

  function SignUp({ users, setUsers }) {
    const [usern, setUsern] = useState("");
    const [pass, setPass] = useState("");
     const nav = useNavigate();

    function hSubmit(e) {
      e.preventDefault();
      const id = Object.keys(users).length + 1;
      setUsers({
        ...users,
        [id]: { fsern: usern, fpass: pass },
      });
      nav("/login");
    }

    return (
      <div className="form-container">
        <h1>SignUp</h1>
        <form className="login-form" onSubmit={hSubmit}>
          <input className="input-field" type="text" placeholder="Create Username" onChange={(e) => setUsern(e.target.value)} />
          <input className="input-field" type="password" placeholder="Create Password" onChange={(e) => setPass(e.target.value)} />
          <input className="submit-btn" type="submit" value="SignUp" />
        </form>
      </div>
    );
  }
}

export default HandlingFom;
