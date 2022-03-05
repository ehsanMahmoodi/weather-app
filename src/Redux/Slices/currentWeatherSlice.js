import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {Current_Weather} from "../../api/apiList";

export const getCurrentWeatherCondition = createAsyncThunk('/get weather', async (cityName) => {
    let response = await axios.get(Current_Weather(cityName))
    return response.data
})
const currentWeatherSlice = createSlice({
    name: 'fetch current weather condition', initialState: {
        status: '', data: ""
    }, extraReducers: {
        [getCurrentWeatherCondition.pending]: (state, action) => {
            state.status = 'pending ...'
            state.data = action.payload
        }, [getCurrentWeatherCondition.fulfilled]: (state, action) => {
            state.status = 'sucsess'
            state.data = action.payload
        }, [getCurrentWeatherCondition.rejected]: (state) => {
            state.status = 'faild'
        },
    }
})
export default currentWeatherSlice.reducer