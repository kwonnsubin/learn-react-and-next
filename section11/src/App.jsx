// src > App.jsx

import './App.css';
import { Routes, Route } from 'react-router-dom';

import Country from './pages/Country';
import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/search' element={ <Search/> }/>
      <Route path='/country' element={ <Country/> }/>
      <Route path='*' element={ <NotFound/> }/>
    </Routes>
  );
}

export default App;
