import React from 'react';
import { Link } from 'react-router-dom';
import './Eventstyled.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.organizer}</p>
      <Link to={`/register/${event._id}`}>Register</Link>
      <Link to={`/view/${event._id}`}>View</Link>
    </div>
  );
};

export default EventCard;
