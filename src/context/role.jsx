import React, { useContext, useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
export const AppContext = createContext({});
import { userInfoSelector } from "../redux/selectors";

export const AppProvider = ({ children }) => {
    const [role, setRole] = useState("None");
    const userInfo = useSelector(userInfoSelector);

    return <AppContext.Provider value={{ role, setRole }}>
        {children}
    </AppContext.Provider>
}