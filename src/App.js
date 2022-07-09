import { Route, Routes} from 'react-router-dom';
import './App.css';
import GameDetail from './pages/gamepage';
import Home from './pages/home';
import Login from './pages/signin';
import Game from './pages/rock-paper-scissors';
import Signup from './pages/singup'
import Error from './pages/error'
import Profile from './pages/profile';
import ProfilePlayer from './pages/profilePlayer';

function App() {
  return (
    <div data-testid={'app'} className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/gamepage/1' element={<GameDetail />} />
          <Route path='/game' element={<Game />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/gamepage/1/playerprofile/:id' element={<ProfilePlayer />} />
          <Route path='*' element={<Error />} />
        </Routes>
    </div>
  );
}

export default App;
