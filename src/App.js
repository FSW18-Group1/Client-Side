import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Game from './pages/paper-rock-scissor';
import Game_2 from './pages/rock-paper-scissors';
import Signup from './pages/singup'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/game' element={<Game />} />
        <Route path='/game2' element={<Game_2 />} />
      </Routes>
    </div>
  );
}

export default App;
