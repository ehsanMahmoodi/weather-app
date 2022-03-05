import {Box} from "@mui/material";
import {useStyle} from "./SearchCity.style";
import {useContext} from "react";
import {PublicContext} from "../../../../Context/Context";
import {useDispatch} from "react-redux";
import {getCurrentWeatherCondition} from "../../../../Redux/Slices/currentWeatherSlice";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchCity = () => {
    // get css style
    const classes = useStyle()
    // get state from context
    const {cityName, setCityName, setLoader, setError} = useContext(PublicContext)
    const dispatch = useDispatch()
    // handelSubmitForm
    const handelSubmitForm = (e) => {
        e.preventDefault()
        // check the input is not empty
        if (cityName) {
            setCityName(cityName)
            dispatch(getCurrentWeatherCondition(cityName))
            setLoader(true)
            setCityName(null)
        } else {
            toast.error("please insert name of city", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setError(false)
        }
    }
    return (<Box component={'form'} className={classes.searchCityForm} onSubmit={(event) => handelSubmitForm(event)}>
        <Box className={classes.formItems}>
            <input type="search" value={(cityName) ? cityName : ''} placeholder={'enter city name ...'}
                   onChange={(e) => setCityName(e.target.value)}/>
            <button type={'submit'}>search</button>
        </Box>
    </Box>)
}
export default SearchCity