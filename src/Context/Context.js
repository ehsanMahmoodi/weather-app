import {createContext, useState} from "react";

export const PublicContext = createContext({
    cityName: '', setCityName: () => {
    }
})
const PublicCtx = ({children}) => {
    const [cityName, setCityName] = useState(null)
    return (<PublicContext.Provider value={{
        cityName, setCityName
    }}>
        {children}
    </PublicContext.Provider>)
}
export default PublicCtx