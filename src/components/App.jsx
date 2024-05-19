import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventBoard from './EventBoard/EventBoard';
import EventRegistration from './EventRegistration/EventRegistration';
import ParticipantsPage from './ParticipantsPage/ParticipantsPage';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" component={EventBoard} />
        <Route path="/register-event" component={EventRegistration} />
        <Route path="/participants" component={ParticipantsPage} />
      </Routes>
    </div>
  );
}

export default App;
