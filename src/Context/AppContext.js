import { createContext } from "react";
import { useState, useEffect } from "react";

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [isDay, setIsDay] = useState(true);
    const themeStyle = {
        day: {
            backgroundColor: "white",
            color: "black",
        },
        night: {
            backgroundColor: "black",
            color: "white"
        }

    }

    useEffect(() => {
        fetch("https://reqres.in/api/user/2")
            .then ((res) => res.json())
            .then ((res) => {
                setUser(res.data);
            });
    },[]);

    return 
        <AppContext.Provider value = {{user, isOpen,setIsOpen, isDay, setIsDay, themeStyle: themeStyle[isDay ? "day" : "night"]}}>
            {children}
        </AppContext.Provider>
    
}