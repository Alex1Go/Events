import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchParticipants } from '../../redux/participantsSlice';

const ParticipantsPage = () => {
  const dispatch = useDispatch();
  const participants = useSelector(state => state.participants.participants);
  const participantsStatus = useSelector(state => state.participants.status);
  const error = useSelector(state => state.participants.error);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (participantsStatus === 'idle') {
      dispatch(fetchParticipants());
    }
  }, [participantsStatus, dispatch]);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredParticipants = participants.filter(
    participant =>
      participant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Participants</h1>
      <input
        type="text"
        placeholder="Search participants"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {participantsStatus === 'loading' && <div>Loading...</div>}
        {participantsStatus === 'succeeded' &&
          filteredParticipants.map(participant => (
            <div key={participant._id}>
              <h3>{participant.fullName}</h3>
              <p>{participant.email}</p>
              <p>
                Date of Birth: {new Date(participant.dob).toLocaleDateString()}
              </p>
              <p>Referral Source: {participant.referralSource}</p>
            </div>
          ))}
        {participantsStatus === 'failed' && <div>{error}</div>}
      </div>
    </div>
  );
};

export default ParticipantsPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ParticipantsPage = () => {
//   const [participants, setParticipants] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     fetchParticipants();
//   }, []);

//   const fetchParticipants = async () => {
//     const response = await axios.get('/api/participants');
//     setParticipants(response.data);
//   };

//   const handleSearch = e => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredParticipants = participants.filter(
//     participant =>
//       participant.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       participant.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Participants</h1>
//       <input
//         type="text"
//         placeholder="Search participants"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       <div>
//         {filteredParticipants.map(participant => (
//           <div key={participant._id} className="participant-card">
//             <h3>{participant.fullName}</h3>
//             <p>Email: {participant.email}</p>
//             <p>
//               Date of Birth: {new Date(participant.dob).toLocaleDateString()}
//             </p>
//             <p>Referral Source: {participant.referralSource}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ParticipantsPage;
