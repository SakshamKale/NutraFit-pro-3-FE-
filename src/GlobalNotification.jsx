import React, { useContext } from 'react';
import { useState } from "react";

import { NotificationContext } from '../context/NotificationContext';
import '../context/Notification.css';

const GlobalNotification = () => {
  const { notification, history } = useContext(NotificationContext);
const [showDropdown, setShowDropdown] = useState(false);


  return showDropdown ? (
    <div className="notification-dropdown">
      <h4>Notifications</h4>
      <ul>
        {history.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default GlobalNotification;
