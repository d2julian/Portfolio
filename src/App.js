import React, { useContext } from "react";
import Intro from "./components/Intro";
import "./App.css";
import About from "./components/About";
import ProductList from "./components/ProductList";
import Contact from "./components/Contact";
import { Theme } from "./components/Theme";
import { GlobalStyles } from "./components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import Toggle from "./components/Toggle";
import ThemeContext from "./store/ThemeContext";

function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themeContext.state.theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
