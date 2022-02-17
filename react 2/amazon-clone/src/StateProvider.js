//setup data layer, to track the basket
import React, { createContext, useContext, useReducer } from "react";

//data laag, de context
export const StateContext = createContext();

//build a provider
export const StateProvider = ({ reducer, initialState, children }) =>
(<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);


