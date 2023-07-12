import "./App.css";
import ListPage from "./pages/ListPage";
import { Routes, Route } from "react-router-dom";
import DetailsListPage from "./pages/DetailsListPage";
import { ThemeContext } from "./theme";
import { useContext } from "react";

function App() {
  const { theme } = useContext(ThemeContext);
  console.log("appss theemee" + theme);

  return (
    <div className="devian" data-theme={theme}>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/job/:id" element={<DetailsListPage />} />
      </Routes>
    </div>
  );
}

export default App;
