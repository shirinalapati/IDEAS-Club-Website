import { useState } from 'react';
import './UpcomingEvents.css';
import EventCard from './EventCard';

function UpcomingEvents() {
  const [currentMonth, setCurrentMonth] = useState('Sep 2025');

  const events = [
    {
      date: 15,
      day: 'MON',
      title: 'Taking the leap into Entrepreneurship: My Journey',
      time: '6:00 - 7:00 PM',
      location: 'Student Union Theatre'
    },
    {
      date: 15,
      day: 'MON',
      title: 'Taking the leap into Entrepreneurship: My Journey',
      time: '6:00 - 7:00 PM',
      location: 'Student Union Theatre'
    }
  ];

  const handlePreviousMonth = () => {
    // Month navigation logic would go here
  };

  const handleNextMonth = () => {
    // Month navigation logic would go here
  };

  return (
    <section className="upcoming-events-section">
      <div className="container">
        <h2 className="section-title">UPCOMING EVENTS</h2>
        <div className="events-header">
          <button className="nav-arrow" onClick={handlePreviousMonth}>←</button>
          <div className="current-month">{currentMonth}</div>
          <button className="nav-arrow" onClick={handleNextMonth}>→</button>
        </div>
        <div className="events-list">
          {events.map((event, index) => (
            <EventCard
              key={index}
              date={event.date}
              day={event.day}
              title={event.title}
              time={event.time}
              location={event.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;


