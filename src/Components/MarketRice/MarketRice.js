// Rice를 판매하는 상점 컴포넌트입니다.
// 직접 그린 svg 파일을 return 합니다.
import React, { useState, useEffect } from 'react';
import rice from '../../Image/rice.png';
function MarketRice() {
  return <img src={rice} alt="rice" id="rice"></img>;
}

export default MarketRice;
