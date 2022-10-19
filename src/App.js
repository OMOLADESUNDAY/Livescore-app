import './App.css';
import DetailHome from './component/DetailHome';
import { Route, Routes } from 'react-router-dom';
import Scores from './component/Scores'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Scores />} />
        <Route path="/detailHome" element={<DetailHome teamId={'9098'}/>} />
      </Routes>
    </div>
  );
}

export default App;
