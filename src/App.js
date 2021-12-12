import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import MarketPage from './Pages/MarketPage/MarketPage';
import SelectGamePage from './Pages/SelectGamePage/SelectGamePage';
import GamePage1 from './Pages/GamePage1/GamePage1';
import CartPage from './Pages/CartPage/CartPage';
import GamePage2 from './Pages/GamePage2/GamePage2';
import InformationPage from './Pages/InformationPage/InformationPage';
// 생성한 페이지를 리턴하면 npm start 시에 확인 할 수 있습니다

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/market" exact element={<MarketPage />} />
        <Route path="/selectGame" exact element={<SelectGamePage />} />
        <Route path="/gamePage1" exact element={<GamePage1 />} />
        <Route path="/gamePage2" exact element={<GamePage2 />} />
        <Route path="/information" exact element={<InformationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
