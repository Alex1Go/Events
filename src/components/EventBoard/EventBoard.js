import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EventCard from '../EventCard/EventCard';
import { fetchEvents } from '../../redux/eventsSlice';

const EventBoard = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events.events);
  const eventsStatus = useSelector(state => state.events.status);
  const error = useSelector(state => state.events.error);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState('');
  const eventsPerPage = 12;

  useEffect(() => {
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents(sortField));
    }
  }, [eventsStatus, dispatch, sortField]);

  const handleSort = field => {
    setSortField(field);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Events</h1>

      <div>
        <button onClick={() => handleSort('title')}>Sort by Title</button>
        <button onClick={() => handleSort('date')}>Sort by Date</button>
        <button onClick={() => handleSort('organizer')}>
          Sort by Organizer
        </button>
        <EventCard />
      </div>
      <div>
        {eventsStatus === 'loading' && <div>Loading...</div>}
        {eventsStatus === 'succeeded' &&
          currentEvents.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        {eventsStatus === 'failed' && <div>{error}</div>}
      </div>
      <div>
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

// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import EventCard from 'components/EventCard/EventCard';

// const EventBoard = () => {
//   const [events, setEvents] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortField, setSortField] = useState('');
//   const eventsPerPage = 12;

//   const fetchEvents = useCallback(async () => {
//     const response = await axios.get('/api/events', { params: { sortField } });
//     setEvents(response.data);
//   }, [sortField]);

//   useEffect(() => {
//     fetchEvents();
//   }, [fetchEvents]);

//   const handleSort = field => {
//     setSortField(field);
//   };

//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h1>Events</h1>
//       <div>
//         <button onClick={() => handleSort('title')}>Sort by Title</button>
//         <button onClick={() => handleSort('date')}>Sort by Date</button>
//         <button onClick={() => handleSort('organizer')}>
//           Sort by Organizer
//         </button>
//       </div>
//       <div>
//         {currentEvents.map(event => (
//           <EventCard key={event._id} event={event} />
//         ))}
//       </div>
//       <div>
//         {[...Array(Math.ceil(events.length / eventsPerPage)).keys()].map(
//           number => (
//             <button key={number} onClick={() => paginate(number + 1)}>
//               {number + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventBoard;

// const EventBoard = () => {
//   const [events, setEvents] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [sortField, setSortField] = useState('');
//   const eventsPerPage = 12;

//   const fetchEvents = useCallback(async () => {
//     const response = await axios.get('/api/events', { params: { sortField } });
//     setEvents(response.data);
//   }, [sortField]);

//   useEffect(() => {
//     fetchEvents();
//   }, [fetchEvents]);

//   const handleSort = field => {
//     setSortField(field);
//   };

//   const indexOfLastEvent = currentPage * eventsPerPage;
//   const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
//   const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div>
//       <h1>Events</h1>
//       <div>
//         <button onClick={() => handleSort('title')}>Sort by Title</button>
//         <button onClick={() => handleSort('date')}>Sort by Date</button>
//         <button onClick={() => handleSort('organizer')}>
//           Sort by Organizer
//         </button>
//       </div>
//       <div>
//         {currentEvents.map(event => (
//           <EventCard key={event._id} event={event} />
//         ))}
//       </div>
//       <div>
//         {[...Array(Math.ceil(events.length / eventsPerPage)).keys()].map(
//           number => (
//             <button key={number} onClick={() => paginate(number + 1)}>
//               {number + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventBoard;
