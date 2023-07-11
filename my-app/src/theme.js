import React, { createContext, useState } from "react";
import { useMemo } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

//   console.log('jjjjjjjjj ' + theme)
const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );


  return    (<ThemeContext.Provider value={{theme, toggleTheme }}>
       {children}
    </ThemeContext.Provider>)
//    [theme, colorMode]

    
    // (<ThemeContext.Provider value={{ theme, toggleTheme }}>
    //   {children}
    // </ThemeContext.Provider>)

};