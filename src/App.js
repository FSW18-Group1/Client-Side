import { Route, Routes } from 'react-router-dom';
import './App.css';
import GameDetail from './pages/gamepage';
import Home from './pages/home';
import Homepage from './pages/homelogin';
import Login from './pages/login';
import Game_2 from './pages/rock-paper-scissors';
import Signup from './pages/singup'
import Error from './pages/error'
import Profile from './pages/profile';
import ProfilePlayer from './pages/profilePlayer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/gamepage' element={<GameDetail />} />
        <Route path='/game' element={<Game_2 />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/gamepage/playerprofile/:id' element={<ProfilePlayer />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
