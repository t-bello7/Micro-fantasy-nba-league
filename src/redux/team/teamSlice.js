import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: 'idle',
  error: null,
  data: [],
  dataStat: {}
};

const baseURL = 'https://***REMOVED***/';

export const fetchTeams = createAsyncThunk(
  'team/fetchTeams',
  async () => {
    const response = await axios.get(`${baseURL}teams`,
      {
        headers: {
          'Content-type': 'application/json',
          'X-RapidAPI-Host': import.meta.env.VITE_XRapidAPIHost,
          'X-RapidAPI-Key': import.meta.env.VITE_XRapidAPIKey
        },
      });
    return response.data.response;
  }
);

export const fetchTeamStatistics = createAsyncThunk(
  'team/fetchTeamStatistics',
  async (id) => {
    const response = await axios.get(`${baseURL}/teams/statistics?season=2020&id=${id}`,
      {
        headers: {
          'Content-type': 'application/json',
          'X-RapidAPI-Host': import.meta.env.VITE_XRapidAPIHost,
          'X-RapidAPI-Key': import.meta.env.VITE_XRapidAPIKey
        },
      });
    return response.data.response[0];
  }
);

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      })
      .addCase(fetchTeamStatistics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTeamStatistics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dataStat = action.payload;
      })
      .addCase(fetchTeamStatistics.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export default teamSlice.reducer;
