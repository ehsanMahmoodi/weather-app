import {configureStore} from "@reduxjs/toolkit";
import currentWeatherSlice from './Slices/currentWeatherSlice'

const Store = configureStore({
    reducer: {
        currentWeatherSlice
    }
})
export default Store