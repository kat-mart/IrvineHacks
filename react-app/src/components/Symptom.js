import React, { useState } from 'react';
import './Symptom.css';
import dizzy from './images/dizzy.png';
import fatigue from './images/fatigue2.png';
import nausea from './images/nausea.png';
import headache from './images/headache.png';

export default function Symptom() {
  const [activePopup, setActivePopup] = useState(null);
  // show or hide the popup
  const togglePopup = (symptom) => {
    setActivePopup(prevState => (prevState === symptom ? null : symptom)); // Toggle between showing and hiding
  };

  // Function to close the popup
  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    // container holding the symptoms
    <div className='container'>
      <h2>Experiencing any post-op symptoms?</h2>
      Here are some common post-op symptoms, please contact your doctor for any concerns.

      {/* Grid layout for symptoms */}
      <div className="grid-container">
        <div className="grid-item" onClick={() => togglePopup('nausea')}>
          <h3>Nausea</h3>
          <img src={nausea} className="photo" alt="nausea" />
        </div>
        <div className="grid-item" onClick={() => togglePopup('headache')}>
          <h3>Headache</h3>
          <img src={headache} className="photo" alt="headache" />

        </div>
        <div className="grid-item" onClick={() => togglePopup('fatigue')}>
          <h3>Fatigue</h3>
          <img src={fatigue} className="photo" alt="fatigue" />
        </div>
        <div className="grid-item" onClick={() => togglePopup('dizziness')}>
          <h3>Dizziness</h3>
          <img src={dizzy} className="photo" alt="dizziness" />

        </div>
      </div>

      {/* Popup */}
      {activePopup && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>X</button>
            <h3>{activePopup}</h3>
            <p>
              {activePopup === 'nausea' && 'uneasiness in your stomach: it may be caused by anesthesia, pain medications, or the surgery itself.'}
              {activePopup === 'headache' && 'painful sensation anywhere near your head: can occur after surgery due to dehydration, medications, or tension from the procedure.'}
              {activePopup === 'fatigue' && 'feeling of constant exhaustion: common after surgery as your body heals and recovers.'}
              {activePopup === 'dizziness' && 'feeling of lightheadedness or unsteady: may be caused by anesthesia, dehydration, or a side effect of medications.'}
            </p>
          </div>
        </div>
      )}
      <h2>Experiencing any general unwellness?</h2>
      <p>Chat with a doctor about your concerns</p>
        <div className='symptoms-contact'>
            
        </div>
    </div>
  );
}
