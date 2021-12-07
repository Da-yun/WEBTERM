import React, { useEffect } from 'react';
import '../GamePage1/style.css';
import FireBucket from '../../Components/FireBucket/FireBucket';
function GamePage1() {
  return (
    <div className="gameContainer">
      <p className="intro">
        오늘의 메뉴는 김치찌개! <br /> 이제 곧 김치찌개 사진이 등장합니다.
        <br />
        김치찌개는 어디있을까요?
      </p>
      <div className="fireBucket">
        <FireBucket />
      </div>
    </div>
  );
}

export default GamePage1;
