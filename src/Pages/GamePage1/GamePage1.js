import React, { useEffect, useState } from 'react';
import '../GamePage1/style.css';
import FireBucket from '../../Components/FireBucket/FireBucket';
import ramen from '../../Image/gimchi/ramen.png';
import gimchi from '../../Image/gimchi/gimchi.png';
import boodae from '../../Image/gimchi/boodae.png';
import oogugi from '../../Image/gimchi/oogugi.png';
import $ from 'jquery';
import { BsFillAlarmFill } from 'react-icons/bs';
function GamePage1() {
  const array = [];
  let index = -1;
  let timer = '';
  let cn = 6;
  const [count, setCount] = useState(6);
  function createList() {
    let img1 = ' <img src=' + ramen + " alt='background' id='ramen' />";
    let img2 = ' <img src=' + gimchi + " alt='background' id='gimchi' />";
    let img3 = ' <img src=' + boodae + " alt='background' id='boodae' />";
    let img4 = ' <img src=' + oogugi + " alt='background' id='oogugi' />";
    array.push(img1);
    array.push(img2);
    array.push(img3);
    array.push(img4);
    array.sort(() => Math.random() - 0.5);
    let rst = '';
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes('gimchi')) {
        index = i;
      }
      rst += array[i];
    }
    return rst;
  }
  function createImg() {
    let list =
      "<div id = 'hidden'></div><div id = 'hidden'></div><div id = 'hidden'></div><div id = 'hidden'></div>";
    return list;
  }
  useEffect(() => {
    setTimeout(function () {
      $('.intro').css('display', 'none');
      $('.fireBucket').css('display', 'none');
      let content = createList();
      $('#imgBucket').html(content);
      setTimeout(function () {
        let lst = createImg();
        $('#imgBucket').html(lst);
        setTimeout(function () {
          let lst = createImg();
          $('#imgBucket').html(lst);
          $('#count').css('display', 'flex');
          setTimeout(function () {
            $('#count').css('display', 'none');
            console.log('n');
          }, 5000);
        }, 1000);
      }, 1000);
    }, 2000);
  });
  return (
    <div className="gameContainer">
      <p className="intro">
        오늘의 메뉴는 김치찌개! <br /> 이제 곧 김치찌개 사진이 1초동안
        등장합니다.
        <br />
        김치찌개는 어디있을까요?
      </p>
      <div className="fireBucket">
        <FireBucket />
      </div>
      <div id="count">
        <p id="countText">{count}초</p>
        <BsFillAlarmFill size={30} color="red" />
      </div>
      <div id="imgBucket"></div>
    </div>
  );
}

export default GamePage1;
