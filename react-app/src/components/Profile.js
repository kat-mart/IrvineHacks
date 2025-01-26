import './Profile.css';
import { useState } from 'react';

export default function Profile() {
    const [name, setName] = useState('Jane Doe');
    const [editName, setEditName] = useState(false);
    const [dob, setDob] = useState('00/00/0000');
    const [editDob, setEditDob] = useState(null);
    const [phone, setPhone] = useState('000-000-0000');
    const [editPhone, setEditPhone] = useState(null);

    const toggleEditName = () => {
        setEditName(!editName); 
    };

    const toggleEditDob = () => {
        setEditDob(!editDob); 
    };

    const toggleEditPhone = () => {
        setEditPhone(!editPhone); 
    };
    

    return(
        <div className='container'>
            <h1 className='profile-header'>Hi {name}</h1>
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
    )
}

// Patient Profile:

// Personal details, emergency contacts, insurance information.
// Medical history, allergies, past surgeries, and family medical history.