import './App.css';
import DetailHome from './component/DetailHome';
import { Route, Routes } from 'react-router-dom';
import Scores from './component/Scores'
import Header from './component/Header';

function App() {
  return (
    <div>
    <Header/>
      <Routes>
        <Route path="/" element={<Scores />} />
        <Route path="/detailHome" element={<DetailHome />} />
      </Routes>
    </div>
  );
}

export default App;
