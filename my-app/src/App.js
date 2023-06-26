import './App.css';
import ListPage from './pages/ListPage';
import { Routes, Route } from "react-router-dom";
import DetailsListPage from './pages/DetailsListPage';
import Try from './components/Try'

function App() {
  return (
    <div className="devian">
      {/* <ListPage></ListPage> */}
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/job/:id" element={<DetailsListPage />} />
        {/* <Route path="/try" element={<Try />} /> */}
      </Routes>
    </div>
  );
}

export default App;
