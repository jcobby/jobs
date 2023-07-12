import React, { useContext, useState, useEffect } from "react";
import "./Headersvg.css";
import headerdesktop from "../assets/desktop/bg-pattern-header.svg";
import tabletHeader from "../assets/tablet/bg-pattern-header.svg";
import mobileHeader from "../assets/mobile/bg-pattern-header.svg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo.svg";

import { ThemeContext } from "../theme";


function Headersvg() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once



  return (
    <div className="head-div">
     
      {windowWidth > 768 ? (
        <img className="svg-header" src={headerdesktop} alt=""></img>
      ) : windowWidth > 554 ? (
        <img className="svg-table-header" src={tabletHeader} alt=""></img>
      ) : (
        <img className="svg-header" src={mobileHeader} alt=""></img>
      )}
      <div style={{ display: "flex" }}>
        <img className="svg-logo" src={logo} alt=""></img>
        <div className="svg-switch">
          <img className="" src={sun} alt=""></img>

          <label class="toggle-switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span class="slider"></span>
          </label>
          <img className="" src={moon} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Headersvg;
