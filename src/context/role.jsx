import React, { useContext, useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
export const AppContext = createContext({});
import { userInfoSelector } from "../redux/selectors";

export const AppProvider = ({ children }) => {
    const [role, setRole] = useState("None");
    const userInfo = useSelector(userInfoSelector);
    useEffect(() => {
        { userInfo ? console.log("User role:", userInfo.role) : console.log("not login yet") }
        { userInfo ? setRole(userInfo.role) : console.log("not login yet => not set role") }
    }, []);

    return <AppContext.Provider value={{ role, setRole }}>
        {children}
    </AppContext.Provider>
}