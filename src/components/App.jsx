import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import EventRegistration from './EventRegistration';
import ParticipantList from './ParticipantList';
import EventBoard from './EventBoard';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={EventBoard} />
        <Route path="/register/:id" component={EventRegistration} />
        <Route path="/view/:id" component={ParticipantList} />
      </div>
    </Router>
  );
};

export default App;
