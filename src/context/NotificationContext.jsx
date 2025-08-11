import React, { createContext, useContext, useState, useEffect } from 'react';
import './Notification.css';

export const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);
  const [history, setHistory] = useState([]);

  const triggerNotification = (message) => {
    setNotification(message);
    setHistory((prev) => [...prev, message]);

    setTimeout(() => setNotification(null), 5000); // show for 10 seconds
  };

  // Example schedule every 2 minutes
  useEffect(() => {
    const schedule = [ 
  "🚨 Time for Warm-up!",
  "💧 Stay Hydrated!",
  "🔥 Time for HIIT session!",
  "🧘 Time to cool down and stretch.",
  "🏋️ Morning Strength Training at 6:30 AM!",
  "🍽️ Time for Breakfast at 7:30 AM!",
  "💻 Focus on Work – Stay Sharp!",
  "🥗 Lunch break at 1:00 PM – Eat Clean!",
  "🏃 Evening Cardio Session at 6:00 PM!",
  "🍽️ Dinner at 7:30 PM – Recover Well!",
  "📅 Review your fitness progress tonight!",
  "🔄 Get ready to plan your next day!"
];

    let i = 0;

    const interval = setInterval(() => {
      triggerNotification(schedule[i % schedule.length]);
      i++;
    }, 2 * 60 * 1000); // every 2 mins

    return () => clearInterval(interval);
  }, []);

  return (
    <NotificationContext.Provider value={{ notification, triggerNotification, history }}>
      {children}
      {notification && (
        <div className="custom-notification slide-in-top">
          {notification}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
