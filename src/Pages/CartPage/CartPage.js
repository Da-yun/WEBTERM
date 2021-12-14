import '../CartPage/cartstyle.css';
import React, { useEffect } from 'react';
import ramen from '../../Image/gimchi/ramen.png';
import gimchi from '../../Image/gimchi/gimchi.png';
import boodae from '../../Image/gimchi/boodae.png';
import oogugi from '../../Image/gimchi/oogugi.png';
import $ from 'jquery';

// 홈스크린에서 화면 끝을 클릭하면 이동하는 페이지입니다.

function CartPage() {
  function handler(e) {
    // css 애니메이션을 통해 마우스를 올리면 4초동안 배경 색깔이 4개로 바뀐다.
    if (e.target.id === 'IMG') {
      let vi = $(e.target.parentNode);
      vi.css('animation-name', 'example');
      vi.css('animation-duration', '4s');
      console.log(vi);
      //vi.setPropterty('animation-name', 'example');
      //e.target.parentNode
      //e.target.parentNode.css(' animation-duration', '4s');
    }
  }
  useEffect(() => {
    document.addEventListener('mousemove', handler);
  });
  return (
    <div className="container">
      <p id="cart">수집한 카드</p>
      <div className="cotainer2">
        <div id="img1">
          <img id="IMG" src={ramen}></img>
        </div>
        <div id="imgcontainer">
          <img id="IMG" src={gimchi}></img>
        </div>
        <div id="imgcontainer">
          <img id="IMG" src={boodae}></img>
        </div>
        <div id="imgcontainer">
          <img id="IMG" src={oogugi}></img>
        </div>
        <div id="imgcontainer">
          <img id="IMG" src={oogugi}></img>
        </div>
        <div id="imgcontainer">
          <img d="IMG" src={oogugi}></img>
        </div>
        <div id="imgcontainer">
          <img id="IMG" src={oogugi}></img>
        </div>
        <div id="imgcontainer">
          <img id="IMG" src={oogugi}></img>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
