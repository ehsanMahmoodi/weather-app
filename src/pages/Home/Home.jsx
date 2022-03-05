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
            <Grid item xs={10}><SearchCity/></Grid>
            <Grid item xs={7} md={6}><ResultWeather/></Grid>
        </Grid>
    </Container>)
}
export default Home