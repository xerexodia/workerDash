import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext({
    user: null,
    setUser: () => {}
});

const DashContext = ({ children }) => {
    const [user, setUser] = useState(null);

    return <StateContext.Provider value={{ user, setUser }}>{children}</StateContext.Provider>;
};

export default DashContext;
export const useStateContext = () => useContext(StateContext);
