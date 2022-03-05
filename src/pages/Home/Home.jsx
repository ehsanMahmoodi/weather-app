import {Container, Grid} from "@mui/material";
import SearchCity from "./Components/SearchCity/SearchCity";
import {ToastContainer} from "react-toastify";
import ResultWeather from "./Components/ResultWeather/ResultWeather";

const Home = () => {
    return (<Container maxWidth={false}>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Grid container justifyContent={'center'} alignItems={'center'} sx={{minHeight: '100vh'}}>
            <Grid item xs={11} md={9}><SearchCity/></Grid>
            <Grid item xs={10} sm={7} md={4}><ResultWeather/></Grid>
        </Grid>
    </Container>)
}
export default Home