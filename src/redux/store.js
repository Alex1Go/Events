import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../redux/eventsSlice';
import participantsReducer from '../redux/participantsSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    participants: participantsReducer,
  },
});

export default store;
