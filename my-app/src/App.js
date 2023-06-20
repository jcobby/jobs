import './App.css';
import ListPage from './pages/ListPage';
import { Routes, Route } from "react-router-dom";
import DetailsListPage from './pages/DetailsListPage';

function App() {
  return (
    <div className="devian">
      {/* <ListPage></ListPage> */}
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/job/:name" element={<DetailsListPage />} />
      </Routes>
    </div>
  );
}

export default App;
