import React, { useState } from 'react'; 
import './Home.css';

import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; 

export default function Home() {
    const [events, setEvents] = useState([  // Manage events state
        { id: 1, title: 'Post-op', start: '2025-01-28T10:30:00', end: '2025-01-28T11:30:00' },
        { id: 2, title: 'Physical Therapy', date: '2025-01-26' },
        { id: 3, title: 'Pick-up Medications', date: '2025-02-02' }
    ]);
    const [newEventTitle, setNewEventTitle] = useState('');
    const [newEventDate, setNewEventDate] = useState('');
    const [newEventStart, setNewEventStart] = useState('');
    const [newEventEnd, setNewEventEnd] = useState('');

    const handleDateClick = (arg) => {
        alert('Date clicked: ' + arg.dateStr);
    };

    // adding a new event to the calendar
    const handleAddEvent = () => {
        if (newEventTitle && newEventDate && newEventStart && newEventEnd) {
            // Combine date and time for start and end
            const startDateTime = `${newEventDate}T${newEventStart}`;
            const endDateTime = `${newEventDate}T${newEventEnd}`;

            const newEvent = {
                id: events.length + 1,  // Generate a simple id based on current event length
                title: newEventTitle,
                start: startDateTime,
                end: endDateTime
            };

            setEvents([...events, newEvent]);  // Add new event to the state
            setNewEventTitle('');
            setNewEventDate('');
            setNewEventStart('');
            setNewEventEnd('');
        } else {
            alert('Please fill in all fields (title, date, start time, and end time).');
        }
    };

    // for deleting events 
    const handleEventClick = (clickInfo) => {
        if (window.confirm('Are you sure you want to delete this event?')) {
            // Remove the event from FullCalendar
            clickInfo.event.remove();
            setEvents(events.filter(event => event.id !== clickInfo.event.id));
        }
    };

    return (
        <div className='container'>
            <h1 className='home-header'>Welcome</h1>
            <div className='add-event-form'>
                <h3>Add a new event!</h3>
                <input
                    type="text"
                    placeholder="Event Title"
                    value={newEventTitle}
                    onChange={(e) => setNewEventTitle(e.target.value)}/>
                <input
                    type="date"
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}/>
                <input
                    type="time"
                    value={newEventStart}
                    onChange={(e) => setNewEventStart(e.target.value)}/>
                <input
                    type="time"
                    value={newEventEnd}
                    onChange={(e) => setNewEventEnd(e.target.value)}/>
                <button onClick={handleAddEvent}>Add Event</button>
            </div>
            <div className='calender-container'>
                <FullCalendar
                    plugins={[listPlugin, interactionPlugin]} 
                    initialView="listMonth" 
                    events={events} 
                    dateClick={handleDateClick}
                    eventClick={handleEventClick}/>
            </div>
        </div>
    );
}
