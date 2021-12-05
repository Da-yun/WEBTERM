import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MarketPage from './Pages/MarketPage/MarketPage';
import SelectGamePage from './Pages/SelectGamePage/SelectGamePage';
import CartPage from './Pages/CartPage/CartPage';

// 생성한 페이지를 리턴하면 npm start 시에 확인 할 수 있습니다

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/market" exact element={<MarketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
