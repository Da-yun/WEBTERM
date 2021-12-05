// Desert를 판매하는 상점 컴포넌트입니다.
// 직접 그린 svg 파일을 return 합니다.
import React, { useState, useEffect } from 'react';
import desert from '../../Image/desert.png';
function MarketDesert() {
  return <img src={desert} alt="desert" id="desert"></img>;
}

export default MarketDesert;
