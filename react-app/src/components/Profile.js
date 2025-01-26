import './Profile.css';
import { useState } from 'react';

export default function Profile() {
    const [name, setName] = useState('Jane Doe');
    const [editName, setEditName] = useState(false);
    const [dob, setDob] = useState('00/00/0000');
    const [editDob, setEditDob] = useState(null);
    const [phone, setPhone] = useState('000-000-0000');
    const [editPhone, setEditPhone] = useState(null);
    const [allergies, setAllergies] = useState('');  
    const [newAllergy, setNewAllergy] = useState(''); 
    const [contact, setContact] = useState('000-000-0000')
    const [editContact, setEditContact] = useState(null);

    const [surgeries, setSurgeries] = useState([]);  // Array to hold surgery details
    const [newSurgery, setNewSurgery] = useState('');
    const [surgeryDate, setSurgeryDate] = useState('');

    const toggleEditName = () => {
        setEditName(!editName); 
    };

    const toggleEditDob = () => {
        setEditDob(!editDob); 
    };

    const toggleEditPhone = () => {
        setEditPhone(!editPhone); 
    };

    const toggleEditContact = () => {
        setEditContact(!editContact); 
    };

    const handleAddAllergy = () => {
        if (newAllergy.trim() !== '') {
            setAllergies([...allergies, newAllergy]);
            setNewAllergy(''); // Clear the input field after adding
        }
    };

    const handleAddSurgery = () => {
        if (newSurgery.trim() !== '' && surgeryDate.trim() !== '') {
            // Add surgery name and its corresponding date as an object
            setSurgeries([...surgeries, { surgery: newSurgery, date: surgeryDate }]);
            setNewSurgery('');  // Clear the surgery input
            setSurgeryDate(''); // Clear the date input
        }
    }

    return (
        <div className='container'>
            <h1 className='profile-header'>Hi {name}</h1>
            <div className='patient-contents'>
                <h2>Patient Profile</h2>
                <div className='inline-container'>
                    <h3>Patient Name: </h3>
                    {editName ? (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    ) : (
                        <p>{name}</p>
                    )}
                    <button onClick={toggleEditName}>
                        {editName ? 'Save' : 'Edit'}
                    </button>
                </div>
                <div className='inline-container'>
                    <h3>Date of Birth: </h3>
                    {editDob ? (
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    ) : (
                        <p>{dob}</p>
                    )}
                    <button onClick={toggleEditDob}>
                        {editDob ? 'Save' : 'Edit'}
                    </button>
                </div>

                <div className='inline-container'>
                    <h3>Phone Number: </h3>
                    {editPhone ? (
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    ) : (
                        <p>{phone}</p>
                    )}
                    <button onClick={toggleEditPhone}>
                        {editPhone ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>

            <div className='patient-contents'>
                <h2>Medical History</h2>
                <div className='medical-child'>
                    <h3>Allergies:</h3>
                    {allergies.length === 0 ? (
                        <p>No known allergies</p>
                    ) : (
                        <ul>
                            {allergies.map((allergy, index) => (
                                <li key={index}>{allergy}</li>
                            ))}
                        </ul>
                    )}
                    <div className='inline-container'>
                        <input
                            type="text"
                            placeholder="Add an allergy"
                            value={newAllergy}
                            onChange={(e) => setNewAllergy(e.target.value)}
                        />
                        <button onClick={handleAddAllergy}>Add Allergy</button>
                    </div>
                </div>

                <div className='medical-child'>
                    <h3>Recent Surgeries:</h3>
                    {surgeries.length === 0 ? (
                        <p>No recent surgeries</p>
                    ) : (
                        <ul>
                            {surgeries.map((surgery, index) => (
                                <li key={index}>{surgery.surgery}{" ➤ Date of Surgery: "}{surgery.date}</li>
                            ))}
                        </ul>
                    )}
                    <div className='inline-container'>
                        <input
                            type="text"
                            placeholder='Add a recent surgery'
                            value={newSurgery}
                            onChange={(e) => setNewSurgery(e.target.value)}
                        />
                        <input
                            type='date'
                            value={surgeryDate}
                            onChange={(e) => setSurgeryDate(e.target.value)}
                        />
                        <button onClick={handleAddSurgery}>Add Surgery</button>
                    </div>
                </div>
            </div>
            <div className='patient-contents'>
                <h2>Emergency Contact</h2>
                <div className='inline-container'>
                    <h3>Emergency Contact: </h3>
                    {editContact ? (
                        <input
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    ) : (
                        <p>{contact}</p>
                    )}
                    <button onClick={toggleEditContact}>
                        {editContact ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>
        </div>
    );
}
