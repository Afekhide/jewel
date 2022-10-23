import { useContext, createContext, useState } from "react"

const AppContext = createContext();
const AppContextProvider = ({children}) => {
    const [sideBarShown, setSideBarShown] = useState(false);

    return (
        <AppContext.Provider value={{setSideBarShown, sideBarShown}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
export const ContextDestructured = () => useContext(AppContext)