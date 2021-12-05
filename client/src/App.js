
import './App.css';
import Navbar from './components/Navbar';
import ActorStats from './Pages/ActorStats';
import Home from './Pages/Home';
import MovieStats from './Pages/MovieStats'

function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    {/* <ActorStats/> */}
    <MovieStats/>
    </div>
  );
}

export default App;
