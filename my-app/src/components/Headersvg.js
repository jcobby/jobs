import React, { useContext, useState } from "react";
import "./Headersvg.css";
import headerdesktop from "../assets/desktop/bg-pattern-header.svg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import logo from "../images/logo.svg";
import tyy from "../assets/desktop/bg-pattern-header.svg";
import useLocalStorage from 'use-local-storage'
import { ThemeContext} from "../theme";
import { createContext } from "react";
// import { ThemeContext } from "@emotion/react";
// export const Theme = createContext({theme: 'light',
// toggleColorMode: () => {}});

// export const ThemeProvider = ({children}) => { const [theme, setTheme] = useState('light');

// const toggleColorMode = () => { 
//   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
// }
// }



function Headersvg() {

  const {theme, toggleTheme} = useContext(ThemeContext)

  // const themeMode = useContext(theme)
  // const [theme, setTheme] = useLocalStorage('theme', 'light')
  // const [darkMode, setDarkMode] = useState(false)
  // console.log(theme)
  
// const toggleColorMode = () => { 
//   setTheme(theme === 'light' ? 'dark' : 'light')
//   setDarkMode(!darkMode)
// }
 //send theme using usecontext to another component
  // const theme = useContext(ColorModeContext)
  // console.log(theme)
  // const toggleColorMode = () => {
    //   theme.toggleColorMode()
  // }

console.log("begininggggg" + theme)

  return (
    <div className="head-div" >
      {/* <span>{themeMode}</span> */}
      <img className="svg-header" src={headerdesktop}></img>
      {/* <div className="image-container"> */}
      <div style={{ display: "flex" }}>
        <img className="svg-logo" src={logo}></img>

        <div className="svg-switch">
          <img className="" src={sun}></img>

          <label class="toggle-switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
            <span class="slider"></span>
          </label>
          <img className="" src={moon}></img>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Headersvg;
