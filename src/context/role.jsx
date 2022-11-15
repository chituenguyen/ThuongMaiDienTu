import { createContext,useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({children}) =>{
    const [role,setRole] = useState("None");

    return <AppContext.Provider value={{role,setRole}}>
        {children}
    </AppContext.Provider>
}