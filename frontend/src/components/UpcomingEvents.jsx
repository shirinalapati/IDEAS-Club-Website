import { useState } from 'react';
import './UpcomingEvents.css';
import EventCard from './EventCard';

const calendarIcon = "https://www.figma.com/api/mcp/asset/3ae456c5-434c-4fe1-badf-091b4a89f77b";

function UpcomingEvents() {
  const [currentMonth] = useState('Sep 2025');

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
        <div className="events-content">
          <div className="events-header">
            <button className="nav-arrow nav-arrow-left" onClick={handlePreviousMonth} aria-label="Previous month">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="current-month">
              <img src={calendarIcon} alt="" className="calendar-icon" />
              <span>{currentMonth}</span>
            </div>
            <button className="nav-arrow nav-arrow-right" onClick={handleNextMonth} aria-label="Next month">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
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
      </div>
    </section>
  );
}

export default UpcomingEvents;


