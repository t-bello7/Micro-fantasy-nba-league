import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    status: 'idle',
    error: null,
    data: []
}

const baseURL = 'https://***REMOVED***/'

export const fetchTeams = createAsyncThunk(
    'team/fetchTeams', 
    async () => {
        const response = await axios.get(`${baseURL}teams`, 
        {
            headers: {
              'Content-type': 'application/json',
              'X-RapidAPI-Host': '***REMOVED***',
              'X-RapidAPI-Key': '***REMOVED***'
            },
        }
        );
        return response.data.response;
    }
)

export const fetchTeamStatistics = createAsyncThunk(
    'team/fetchTeamStatistics',
    async (id) => {
        const response = await axios.get(`${baseURL}/teams/statistics?season=2020&id=${id}`)
        return response
    }
)


const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchTeams.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTeams.fulfilled, (state, action) => {
                state.status = 'succeeded';
                console.log(action.payload)
                state.data = action.payload;
            })
            .addCase(fetchTeams.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
    }
})

export default teamSlice.reducer;