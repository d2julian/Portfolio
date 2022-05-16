import React, { useReducer } from "react";

const ThemeContext = React.createContext();

const INITIAL_STATE = { theme: "light" };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const ThemeContextProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
};

export default ThemeContext;
