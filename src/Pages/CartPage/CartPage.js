import '../CartPage/cartstyle.css';
import React, { useEffect } from 'react';
import ramen from '../../Image/gimchi/ramen.png';
import gimchi from '../../Image/gimchi/gimchi.png';
import boodae from '../../Image/gimchi/boodae.png';
import oogugi from '../../Image/gimchi/oogugi.png';
import $ from 'jquery';

// 장바구니 클릭 시 이동하는 장바구니 화면입니다.
// react 라이브러리인 react-table을 사용하여 테이블을 구성합니다.
// 아직 데이터 작업이 이루어지지 않아 테이블 컴포넌트만 생성한 상태입니다.
function CartPage() {
  const img = [
    '<img src = ' + ramen + '/>',
    '<img src = ' + ramen + '/>',
    '<img src = ' + ramen + '/>',
  ];
  function handler(e) {
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
    var item1 = $('#imgContainer');
    document.addEventListener('mousemove', handler);
    item1.mouseenter(function (e) {
      item1.animate({ width: '+=150px' });
    });
    item1.click(function () {});
    item1.mouseleave(function (e) {});
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
