import './App.css';
import ListPage from './pages/ListPage';
import { Routes, Route } from "react-router-dom";
import DetailsListPage from './pages/DetailsListPage';
import Try from './components/Try'
import { ColorModeContext, useMode } from './theme';
// import { ThemeProvider } from '@emotion/react';
// import { theme } from './components/Headersvg';
import { ThemeContext } from './theme';
import { useContext } from 'react';
import { ThemeProvider } from './theme';







function App() {

// const [theme, colorMode] = useMode()
const { theme } = useContext(ThemeContext)
console.log("appss theemee" + theme)

  return (
    // <ColorModeContext.Provider value={colorMode}>
    // <ThemeProvider>

    <div className="devian" data-theme={theme} >
      {/* <h1>them: {theme}</h1> */}
      {/* <h2>hello</h2> */}
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/job/:id" element={<DetailsListPage />} />
        <Route path="/try" element={<Try />} />
      </Routes>
    </div>
    //  </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
