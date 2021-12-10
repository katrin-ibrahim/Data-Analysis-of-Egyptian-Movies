
import './App.css';
import Navbar from './components/Navbar';
import ActorStats from './Pages/ActorStats';
import Home from './Pages/Home';
import MovieStats from './Pages/MovieStats'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<MovieStats />} />
      <Route path="/actor" element={<ActorStats />} />
    </Routes>
    </div>
  );
}

export default App;
