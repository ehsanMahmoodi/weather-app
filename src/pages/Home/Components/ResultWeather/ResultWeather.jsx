import {Avatar, Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import currentWeatherSlice from "../../../../Redux/Slices/currentWeatherSlice";
import {convertUnixTimeToJsTime} from "../../../../utils/convertUnixTimeToJsTime";
import {Fragment, useContext, useEffect} from "react";
import {useStyle} from "./ResultWeather.style";
import {PublicContext} from "../../../../Context/Context";
import Loader from "../../../../common/Loader/Loader";
import {toast} from "react-toastify";
import Error400 from "../../../../common/Error400/Error400";

const ResultWeather = () => {
    // get css style
    const classes = useStyle()
    // get weather-condition result
    const currentWeather = useSelector(store => store.currentWeatherSlice)
    const {loader, setLoader, error, setError} = useContext(PublicContext)
    useEffect(() => {
        if (currentWeather.status === 'pending ...') {
            setLoader(true)
        } else if (currentWeather.status === 'faild') {
            setLoader(false)
            setError(true)
            toast.warn('please enter your city name correctly !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }, [currentWeather.status])

    return (<>
        {(currentWeather.data) ? <Box className={classes.weatherShow} component={'section'}>
            <Box className={classes.weatherItem}> <Typography>City : {currentWeather?.data.name}</Typography></Box>
            <Box className={classes.weatherItem}><Typography>Country
                : {currentWeather?.data.sys.country}</Typography></Box>
            {currentWeather.data.weather.map((weatherItem) => {
                return (<Fragment key={weatherItem.id}>
                    <Box className={classes.weatherItem}>
                        <Typography>Condition : {weatherItem.main}</Typography>
                        <Avatar src={`http://openweathermap.org/img/w/${weatherItem.icon}.png`}/>
                    </Box>
                    <Box className={classes.weatherItem}><Typography>Description
                        : {weatherItem.description}</Typography></Box>
                </Fragment>)
            })}
            <Box className={classes.weatherItem}><Typography>Temperature
                : {Math.floor(currentWeather?.data.main.temp)}&#8451;</Typography></Box>
            <Box className={classes.weatherItem}> <Typography>Humidity
                : {currentWeather?.data.main.humidity}%</Typography></Box>
            <Box className={classes.weatherItem}><Typography>Cloudiness
                : {currentWeather?.data.clouds.all}%</Typography></Box>
            <Box className={classes.weatherItem}> <Typography>Sunrise
                : {convertUnixTimeToJsTime(currentWeather?.data.sys.sunrise)} AM</Typography></Box>
            <Box className={classes.weatherItem}><Typography>Sunset
                : {convertUnixTimeToJsTime(currentWeather?.data.sys.sunset)} PM</Typography></Box>
        </Box> : loader === true ? (<Loader/>) : error === true ? (<Box>
            <Error400/>
        </Box>) : (<></>)}
    </>)
}
export default ResultWeather