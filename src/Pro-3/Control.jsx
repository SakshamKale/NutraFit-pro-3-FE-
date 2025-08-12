// import React, { useState } from "react";
// import Signup from "./SignUppr3";
// import Login from "./Loginpr3";

// const Control = () => {
//   const [users, setUsers] = useState([]);
//   const [isSignedUp, setIsSignedUp] = useState(false); // true = login page

//   const handleSignup = (userData) => {
//     setUsers([...users, userData]);
//     setIsSignedUp(true); // go to login
//   };

//   const handleLogin = (loginData) => {
//     const userFound = users.find(
//       (u) => u.email === loginData.email && u.password === loginData.password
//     );

//     if (userFound) {
//       alert(`Welcome back, ${loginData.email}!`);

//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   const toggleForm = () => {
//     setIsSignedUp((prev) => !prev);
//   };

//   return (
//     <>
//       {isSignedUp ? (
//         <Login onLogin={handleLogin} onSwitch={toggleForm} />
//       ) : (
//         <Signup onSignup={handleSignup} onSwitch={toggleForm} />
//       )}
//     </>
//   );
// };

// export default Control;