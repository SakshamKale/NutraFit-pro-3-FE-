import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router";
import userApi from "./axiosinstance";
const Login = ({ }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const nav21=useNavigate();
 
  const handleLogin =async () => {
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
   

    if (!email || !password) {
      setError("Please enter both email and password.");
    } else if (password.length < 8 || !hasNumber || !hasSymbol) {
      setError("Password must be at least 8 characters, include a number and a symbol.");
    } else {
      setError("");
      try{
        const {data}=await userApi.post('getdata',{email,password});
        if(data?.Success)
        {
          alert(data?.Message)
          nav21('/form')
        }
        else{
          setError(data.Message)
          setEmail("");
          setPassword("");
        }
      }catch (err) {
       if (err.response && err.response.data && err.response.data.Message) {
    setError(err.response.data.Message);  // Show "User not found" or other backend message
    setEmail("");
          setPassword("");
  } else {
    setError("Something went wrong. Please try again.");
  }
    }
  };
  }
  return (
    <div className="body10">
      <button className="login-btn"  style={{width:"80px",height:'40px',position:'absolute',left:'50px',top:'5px',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=>{nav21('/')}}>BACK</button>
    <div className="login-container">
      <h2>Login</h2>

      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

       <p className="error-message" >{error}</p>

      <button className="login-btn" onClick={handleLogin}>Login</button>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Don't have an account?{" "}
        <span style={{ color: "#007BFF", cursor: "pointer" }} onClick={()=>{nav21('/signup')}}>
          Sign up
        </span>
      </p>
    </div>
    </div>  
  );
};

export default Login;