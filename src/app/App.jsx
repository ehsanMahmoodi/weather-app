import Home from "../pages/Home/Home";
import '../index.css'
import PublicCtx from "../Context/Context";

const App = () => {
    return (<PublicCtx>
        <Home/>
    </PublicCtx>)
}
export default App