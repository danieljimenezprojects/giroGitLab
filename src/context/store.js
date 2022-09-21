import { useState, useEffect, createContext } from "react";
import theme from "../theme/theme";

const BkAppContext = createContext();

export function BkAppContextProvider(props) {
    const { children } = props;

    // Servers state
    const [themeAdded, setThemeAdded] = useState(theme);

    // Login state
    const [loginData, setLoginData] = useState({
        userlogged: false,
        userName: undefined
    });

    return (
        <BkAppContext.Provider value={ {
            themeAdded,
            setThemeAdded,
            loginData,
            setLoginData
        } }>
            { children }
        </BkAppContext.Provider>
    );
};

export default BkAppContext;