import { Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './pages/GamePage';
import Landing from './pages/Game/Landing';
// import Home from './pages/home';
// import Login from './pages/login';
// import Signup from './pages/singup'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile/:' element={<Profile />} /> */}
        <Route path='/Gamepage/' element={<GamePage />} />
        <Route path='/Landing/' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
