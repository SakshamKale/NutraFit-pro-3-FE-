import React, { useEffect, useState, useRef } from 'react';

import './NutraFitChat.css';
import logo from './Screenshot 2025-06-30 221420.jpg';
import { useNavigate } from 'react-router';
import { useNotifications } from '../context/NotificationContext';

import userApi2  from './axiosinstance2';
const NutraFitChat = () => { 
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a helpful diet assistant."
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const nav2 = useNavigate();
  const { history } = useNotifications();
  const [showHistory, setShowHistory] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
const [profileImage, setProfileImage] = useState("https://img.icons8.com/ios-filled/100/ffffff/user.png");
const [userData, setUserData] = useState();
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await userApi2.get('/getformdata');
      if (res.data?.Success) {
        setUserData(res.data.data);
      }
    } catch (err) {
      console.error('Failed to fetch user data:', err);
    }
  };

  fetchData();
}, []);
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => setProfileImage(reader.result);
  reader.readAsDataURL(file);
};
  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMessage = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, newUserMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("https://nutrafit-pro-3-backend.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();

      if (data && data.reply) {
        setMessages([...updatedMessages, { role: "assistant", content: data.reply }]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsTyping(false);
    }
  };
const goToTodaySchedule = () => {
  const dayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  const dayRoutes = [
    '/sunday',   // 0
    '/monday',   // 1
    '/tuesday',  // 2
    '/wednesday',// 3
    '/thursday', // 4
    '/friday',   // 5
    '/saturday', // 6
  ];
  nav2(dayRoutes[dayIndex]);
};
const messagesEndRef = useRef(null);
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="NutraFit Logo" className="logo-icon" style={{ borderRadius: '50%' }} />
          <div className="logo-text">
            Nutra<span>Fit</span>
          </div>
        </div>
        <div className="header-icons">
         <img
  src="https://img.icons8.com/ios-filled/50/ffffff/appointment-reminders--v1.png"
  alt="Notifications"
  onClick={() => setShowHistory(!showHistory)}
  style={{ cursor: 'pointer' }}
/>


          <img
  src="https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png"
  alt="Profile"
  onClick={() => setSidebarOpen(true)}
  style={{ cursor: 'pointer' }}
/>

        </div>
      </header>

      <nav className="navbar">
        <span onClick={() => nav2('/home')}>Home</span>
        <span onClick={() => nav2('/recMenu')}>Food Diary</span>
        <span onClick={goToTodaySchedule}>Workout Plans</span>
        <span onClick={() => nav2('/nutrafitchat')}>AI Coach</span>
        <span onClick={() => nav2('/Cc')}>Calorie Counter</span>
      </nav>
      {showHistory && (
  <div className="notification-history">
    <h4>Notifications</h4>
    <ul>
      {history.length === 0 ? (
        <li>No notifications yet.</li>
      ) : (
        history.map((msg, i) => <li key={i}>{msg}</li>)
      )}
    </ul>
  </div>
)}

      <main className="main1">
        <div className="logo10 fade-in-up" style={{ color: '#000000ff', fontSize: '30px' }}>
  NutraFit AI
</div>
<h1 className="fade-in-up delay-1" style={{ fontSize: '20px', color: '#003466' }}>
  What's on your mind today?
</h1>


        <div className="messages">
          {messages
            .filter(msg => msg.role !== "system")
            .map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
          {isTyping && (
            <div className="message assistant">
              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Ask anything about your diet, workouts, or goals..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} style={{ position: 'relative', top: '-8px' }}>
            ➤
          </button>
        </div>
      </main>
      <div className={`profile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>👤 My Fitness Profile</h3>
          <span className="close-btn" onClick={() => setSidebarOpen(false)}>&times;</span>
        </div>
      
        <div className="profile-picture-container">
          <img id="profileImage" src={profileImage} alt="Profile" />
          <label htmlFor="uploadInput" className="upload-icon">+</label>
          <input id="uploadInput" type="file" accept="image/*" hidden onChange={handleImageUpload} />
        </div>
      
        <section className="user-info">
        <h4>Basic Information</h4>
        <ul>
          <li><strong>Full Name:</strong> {userData?.Name || "N/A"}</li>
          <li><strong>Age:</strong> {userData?.Age || "N/A"}</li>
          <li><strong>Height:</strong> {userData ? `${userData.Hft} ft ${userData.Hin} in` : "N/A"}</li>
          <li><strong>Weight:</strong> {userData?.Wei ? `${userData.Wei} kg` : "N/A"}</li>
          <li><strong>Medical Condition:</strong> {userData?.AMC || "None"}</li>
        </ul>
      </section>
      
      <section className="user-info fitness-section">
        <h4>Fitness Details</h4>
        <ul>
          <li><strong>Fitness Goal:</strong> {userData?.FG || "N/A"}</li>
          <li><strong>Activity Level:</strong> {userData?.AL || "N/A"}</li>
        </ul>
      </section>
      
      
        <button className="logout-btn" onClick={() => nav2('/login')}> Log Out</button>
      </div>
    </div>
  );
};

export default NutraFitChat;
