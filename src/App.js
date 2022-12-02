import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import DiceRoll from './components/DiceRoll';
import InitList from './components/InitList';
import Header from './header/Header';
import Home from './pages/home/Home';
import Locations from './pages/home/locations/Locations';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='flex-main-container'>
          <div className='flex-left'>
            <InitList />
            <DiceRoll />
          </div>
          <Routes>
            {' '}
            <Route path='/' element={<Home />} />
            <Route path='/locations' element={<Locations />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
