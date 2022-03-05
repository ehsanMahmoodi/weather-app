import {createContext, useState} from "react";

export const PublicContext = createContext({
    cityName: '', setCityName: () => {},
    loader: false, setLoader: () => {},
    error: false, setError: () => {},
})
const PublicCtx = ({children}) => {
    const [cityName, setCityName] = useState(null)
    const [loader, setLoader] = useState(false)
    const [error,setError] = useState(false)
    return (<PublicContext.Provider value={{
        cityName, setCityName,
        loader, setLoader,
        error,setError
    }}>
        {children}
    </PublicContext.Provider>)
}
export default PublicCtx