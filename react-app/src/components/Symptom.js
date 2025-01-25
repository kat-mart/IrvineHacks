import React, { useState } from 'react';
import './Symptom.css';

export default function Symptom() {
  // State to track if the popup for Nausea is visible
  const [isNauseaPopupVisible, setNauseaPopupVisible] = useState(false);

  // Toggle function to show or hide the popup
  const toggleNauseaPopup = () => {
    setNauseaPopupVisible(prevState => !prevState);
  };

  // Function to close the popup
  const closePopup = () => {
    setNauseaPopupVisible(false);
  };

  return (
    <div className='container'>
      <h2>Experiencing any post-op symptoms?</h2>
      Here are some common post-op symptoms, please contact your doctor for any concerns.

      <div className='post-op'>
        <div className='post-op1' onClick={toggleNauseaPopup}>
          <h3>Nausea</h3>
        </div>
      </div>

      {/* Modal/Popup */}
      {isNauseaPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>X</button>
            <h3>Nausea</h3>
            <p>Nausea is a common side effect following surgery. It may be caused by anesthesia, pain medications, or the surgery itself. </p>
          </div>
        </div>
      )}

      <h2>Experiencing any general unwellness?</h2>
    </div>
  );
}
