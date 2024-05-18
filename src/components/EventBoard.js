import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';
import './Eventstyled.css'

const EventBoard = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 10;

  useEffect(() => {
    axios.get('/api/events').then(response => {
      setEvents(response.data);
    });
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Events</h1>
      <div className="event-grid">
        {currentEvents.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(events.length / eventsPerPage)).keys()].map(
          number => (
            <button key={number} onClick={() => paginate(number + 1)}>
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default EventBoard;
