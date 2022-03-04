import {Container, Grid} from "@mui/material";
import SearchCity from "./Components/SearchCity/SearchCity";
import {ToastContainer} from "react-toastify";

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
        <Grid container justifyContent={'center'}>
            <Grid item xs={10}><SearchCity/></Grid>
            <Grid item xs={10} md={6}>Result</Grid>
        </Grid>
    </Container>)
}
export default Home