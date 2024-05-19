import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerParticipant } from '../../redux/participantsSlice';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    referralSource: '',
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerParticipant(formData));
  };

  return (
    <div className="registration-form">
      <h1>Register for Event</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Where did you hear about this event?</label>
          <div>
            <label>
              <input
                type="radio"
                name="referralSource"
                value="Social media"
                checked={formData.referralSource === 'Social media'}
                onChange={handleChange}
              />
              Social media
            </label>
            <label>
              <input
                type="radio"
                name="referralSource"
                value="Friends"
                checked={formData.referralSource === 'Friends'}
                onChange={handleChange}
              />
              Friends
            </label>
            <label>
              <input
                type="radio"
                name="referralSource"
                value="Found myself"
                checked={formData.referralSource === 'Found myself'}
                onChange={handleChange}
              />
              Found myself
            </label>
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default EventRegistration;

// import React, { useState } from 'react';
// import axios from 'axios';

// const EventRegistration = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     dob: '',
//     referralSource: '',
//   });

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     axios
//       .post('/api/register-event', formData)
//       .then(res => {
//         console.log('Registration successful:', res.data);
//       })
//       .catch(err => {
//         console.error('Registration error:', err);
//       });
//   };

//   return (
//     <div>
//       <h1>Register for Event</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Where did you hear about this event?</label>
//           <input
//             type="text"
//             name="referralSource"
//             value={formData.referralSource}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default EventRegistration;
