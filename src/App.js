import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home/Home';
import TopNav from './Pages/TopNav/TopNav';
import './App.css';
import AllProducts from './Pages/AllProducts/AllProduct/AllProducts';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<TopNav/>} ></Route>
        <Route path="/allProducts" element={<AllProducts/>} ></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;