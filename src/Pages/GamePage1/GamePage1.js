import React, { useEffect, useState } from 'react';
import '../GamePage1/style.css';
import FireBucket from '../../Components/FireBucket/FireBucket';
import ramen from '../../Image/gimchi/ramen.png';
import gimchi from '../../Image/gimchi/gimchi.png';
import boodae from '../../Image/gimchi/boodae.png';
import oogugi from '../../Image/gimchi/oogugi.png';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import { BsFillAlarmFill } from 'react-icons/bs';
function GamePage1() {
  const array = [];
  let index = -1;
  let cn = 6;
  let timer = '';
  const navigate = useNavigate();
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
        console.log('dd' + index);
      }
      rst += array[i];
    }
    return rst;
  }
  function createImg() {
    let list =
      "<div id = '1' class = 'hidden'></div><div id = '2'  class = 'hidden'></div><div id = '3'  class = 'hidden'></div><div id = '4'  class = 'hidden'></div>";
    return list;
  }
  function rePlay() {
    $('#imgBucket').css('display', 'none');
    $('#count').css('display', 'none');
    $('.fireBucket').css('display', 'flex');
    $('#rePlay').css('display', 'flex');
  }
  function time() {
    timer = setInterval(function () {
      if (cn === 0) {
        clearInterval(timer);
        rePlay();
      } else {
        cn--;
        let counter = " <p id='countText'> " + '제한시간 ' + cn + '초' + '</p>';
        $('#countText').html(counter);
      }
    }, 1000);
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
        $('#count').css('display', 'block');
        time();
      }, 1000);
    }, 3000);
    $(document).on('click', '#1', function (e) {
      if (0 == index) {
        navigate('/information');
        clearInterval(timer);
      } else {
        clearInterval(timer);
        console.log('t');
        rePlay();
      }
    });
    $(document).on('click', '#2', function (e) {
      if (1 == index) {
        console.log('e');
        navigate('/information');
        clearInterval(timer);
      } else {
        clearInterval(timer);
        console.log('t');
        rePlay();
      }
    });
    $(document).on('click', '#3', function (e) {
      if (2 == index) {
        console.log('e');
        navigate('/information');
        clearInterval(timer);
      } else {
        clearInterval(timer);
        rePlay();
        console.log('t');
      }
    });
    $(document).on('click', '#4', function (e) {
      if (3 == index) {
        console.log('e');
        navigate('/information');
        clearInterval(timer);
      } else {
        clearInterval(timer);
        rePlay();
        console.log('t');
      }
    });
    $(document).on('click', '#rePlay', function (e) {
      window.location.replace('/gamePage1');
    });
  });
  return (
    <div className="gameContainer">
      <p className="intro">
        오늘의 메뉴는 김치찌개! <br /> 이제 곧 김치찌개 사진이 1초동안
        등장합니다.
        <br />
        김치찌개는 어디있을까요?
      </p>
      <p id="rePlay">다시 시작</p>
      <div className="fireBucket">
        <FireBucket />
      </div>
      <div id="count">
        <p id="countText">제한시간 6초</p>
        <BsFillAlarmFill size={30} color="black" />
      </div>
      <div id="imgBucket"></div>
    </div>
  );
}

export default GamePage1;
