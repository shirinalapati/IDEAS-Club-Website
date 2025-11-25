import './EventCard.css';

function EventCard({ date, day, title, time, location, onClick }) {
  return (
    <div className="event-card" onClick={onClick}>
      <div className="event-date">
        <div className="event-day">{day}</div>
        <div className="event-number">{date}</div>
      </div>
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <div className="event-details">
          <span className="event-time">{time}</span>
          <span className="event-location">{location}</span>
        </div>
      </div>
      <div className="event-arrow">→</div>
    </div>
  );
}

export default EventCard;


