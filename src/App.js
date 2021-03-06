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
import InformationPage2 from './Pages/InformationPage2/InformationPage2';

function App() {
  //  리액트 router를 사용하여 화면 간의 이동을 구현하였습니다.  HomePage가 제일 먼저 나오는 기본 페이지입니다. npm install 후에 npm start 시에 빌드할 수 있습니다.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/market" exact element={<MarketPage />} />
        <Route path="/selectGame" exact element={<SelectGamePage />} />
        <Route path="/gamePage1" exact element={<GamePage1 />} />
        <Route path="/gamePage2" exact element={<GamePage2 />} />
        <Route path="/cartPage" exact element={<CartPage />} />
        <Route path="/information" exact element={<InformationPage />} />
        <Route path="/informationBuchu" exact element={<InformationPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
