import React, { useState } from "react";
import './Login.css'; // Reuse for styling
import { useNavigate } from "react-router";
import userApi from "./axiosinstance";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
const nav20=useNavigate();
  const handleSignup = async () => {
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!email || !password || !confirm) {
      setError("All fields are required.");
    } else if (password.length < 8 || !hasNumber || !hasSymbol) {
      setError("Password must be at least 8 characters, include a number and a symbol.");
    } else if (password !== confirm) {
      setError("Passwords do not match.");
    } else {
      setError("");
      try{
        const response=await userApi.post('/adddata',{email,password});
        if(response.data?.Success)
        {
          alert(response.data?.Message);
           nav20('/login')
        }
      }catch (error) {
        console.log(error);
      }
     
    }
  };

  return (
     
    <div className="body10">
     <button className="login-btn"  style={{width:"80px",height:'40px',position:'absolute',left:'50px',top:'5px',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=>{nav20('/')}}>BACK</button>
    <div className="login-container">
      
      <h2>Signup</h2>

     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<input type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} />
<input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />


      {error && <p className="error-message">{error}</p>}

      <button className="login-btn" onClick={handleSignup}>Signup</button>

      <div style={{ margin: "20px 0", textAlign: "center", color: "#999" }}>
        — or sign up with —
      </div>

      <div className="social-buttons">
        <button className="google-btn">
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          Sign up with Google
        </button>

        <button className="facebook-btn">
          <img src="https://img.icons8.com/color/16/000000/facebook-new.png" alt="Facebook" />
          Sign up with Facebook
        </button>
      </div>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Already have an account?{" "}
        <span style={{ color: "#007BFF", cursor: "pointer" }} onClick={()=>{
          nav20('/login')
        }}>
          Login
        </span>
      </p>
    </div>
    </div>
  );
};

export default Signup;