import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchParticipants = createAsyncThunk(
  'participants/fetchParticipants',
  async () => {
    const response = await axios.get('/api/participants');
    return response.data;
  }
);

export const registerParticipant = createAsyncThunk(
  'participants/registerParticipant',
  async participantData => {
    const response = await axios.post('/api/register-event', participantData);
    return response.data;
  }
);

const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    participants: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchParticipants.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchParticipants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.participants = action.payload;
      })
      .addCase(fetchParticipants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(registerParticipant.fulfilled, (state, action) => {
        state.participants.push(action.payload);
      });
  },
});

export default participantsSlice.reducer;
