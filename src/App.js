import { Route, Routes } from 'react-router-dom';
import './App.css';
import GameDetail from './pages/GameDetail';
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
        <Route path='/profile/:' element={<Profile />} />
        <Route path='/gamepage/:' element={<GameDetail />} /> */}
        <Route path='/gamepage/GameDetail' element={<GameDetail />} />
      </Routes>
    </div>
  );
}

export default App;
