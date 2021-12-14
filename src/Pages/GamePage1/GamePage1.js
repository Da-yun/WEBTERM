import React, { useEffect } from 'react';
import '../GamePage1/style.css';
import FireBucket from '../../Components/FireBucket/FireBucket';
import ramen from '../../Image/gimchi/ramen.png';
import gimchi from '../../Image/gimchi/gimchi.png';
import boodae from '../../Image/gimchi/boodae.png';
import oogugi from '../../Image/gimchi/oogugi.png';
import beef from '../../Image/bulgogi/beef.png';
import bulgogi from '../../Image/bulgogi/bulgogi.png';
import gob from '../../Image/bulgogi/gob.png';
import sam from '../../Image/bulgogi/sam.png';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
import { BsFillAlarmFill } from 'react-icons/bs';
// 김치찌개와 불고기 게임 화면
function GamePage1() {
  const array = [];
  let index = -1; // 정답 위치를 저장할 변수
  const location = useLocation();
  let cn = 6; // 제한 시간
  let timer = '';
  let type = location.state; // 선택한 메뉴 값을 가져옴.
  let lang = window.localStorage.getItem('language'); // 선택한 언어 값을 가져옴.

  const navigate = useNavigate();
  function createList() {
    // 게임 실행 시에 1초동안 등장하는 이미지를 생성하는 함수입니다.
    // sort 함수를 사용하여 무작위로 섞어줍니다.
    let img1;
    let img2;
    let img3;
    let img4;
    if (type === 'kimchi') {
      // 김치찌개 선택 시 등장할 이미지들
      img1 = '<img src=' + ramen + " alt='background' id='ramen' />";
      img2 = '<img src=' + gimchi + " alt='background' id='key' />";
      img3 = '<img src=' + boodae + " alt='background' id='boodae' />";
      img4 = '<img src=' + oogugi + " alt='background' id='oogugi' />";
    } else {
      // 불고기 선택 시 등장할 이미지들
      img1 = '<img src=' + beef + " alt='background' id='beef' />";
      img2 = '<img src=' + bulgogi + " alt='background' id='key' />";
      img3 = '<img src=' + gob + " alt='background' id='gob' />";
      img4 = '<img src=' + sam + " alt='background' id='sam' />";
    }
    array.push(img1);
    array.push(img2);
    array.push(img3);
    array.push(img4);
    array.sort(() => Math.random() - 0.5); // 무작위 섞기
    let rst = '';
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes('key')) {
        // id값에 key라는 값을 미리 넣어놓고 정답 index를 미리 저장해놓는다.
        index = i;
        console.log('dd' + index);
      }
      rst += array[i];
    }
    return rst;
  }
  function createImg() {
    // 이미지가 1초 등장하고 숨겨진 후에 등장할 컴포넌트를 생성하는 함수.
    let list =
      "<div id = '1' class = 'hidden'></div><div id = '2'  class = 'hidden'></div><div id = '3'  class = 'hidden'></div><div id = '4'  class = 'hidden'></div>";
    return list;
  }
  function rePlay() {
    // 재시작 화면을 나타낸느 함수.
    $('#imgBucket').css('display', 'none');
    $('#count').css('display', 'none');
    $('.fireBucket').css('display', 'flex');
    $('#rePlay').css('display', 'flex');
  }
  function time() {
    // 타이머를 통해 6초에서 1초 지날 때마다 값을 하나씩 줄이고 0이 되면 타이머를 없앤다.
    timer = setInterval(function () {
      if (cn === 0) {
        clearInterval(timer);
        rePlay(); // 재시작 화면 셋팅
      } else {
        cn--;
        // 선택한 언에 따라 카운터 객체를 생성하고 값을 바꿔준다.
        if (lang == 'english') {
          let counter =
            " <p id='countText'> " + 'TimeLimit ' + cn + ' seconds' + '</p>';
          $('#countText').html(counter);
        } else {
          let counter =
            " <p id='countText'> " + '제한시간 ' + cn + '초' + '</p>';
          $('#countText').html(counter);
        }
      }
    }, 1000);
  }

  useEffect(() => {
    setTimeout(function () {
      // 3초동안 intro 글을 보여주고 숨긴다.
      $('.intro').css('display', 'none');
      $('.fireBucket').css('display', 'none');
      let content = createList();
      $('#imgBucket').html(content);
      // 이미지를 보여준다.
      setTimeout(function () {
        // 1초가 지나면 hidden 컴포넌트를 생성해서 바꿔준다.
        // 카운터가 시작된다.
        let lst = createImg();
        $('#imgBucket').html(lst);
        $('#count').css('display', 'block');
        time();
      }, 1000);
    }, 3000);
    // 아래에서 부터는 hidden 객체를 선택 시에 미리 정해놓은 아이디 값은 순서이다. 이 순서와 index가 맞는지 확인하여 정답을 확인한다.
    $(document).on('click', '#1', function (e) {
      if (0 === index) {
        clearInterval(timer);
        // 맞으면 타이머를 없애고 information page로 이동
        navigate('/information', { state: { type } });
      } else {
        // 틀리면 다시시작으로 이동
        clearInterval(timer);
        console.log('t');
        rePlay();
      }
    });
    $(document).on('click', '#2', function (e) {
      if (1 === index) {
        console.log('e');
        navigate('/information', { state: { type } });
        clearInterval(timer);
      } else {
        clearInterval(timer);
        console.log('t');
        rePlay();
      }
    });
    $(document).on('click', '#3', function (e) {
      if (2 === index) {
        console.log('e');
        navigate('/information', { state: { type } });
        clearInterval(timer);
      } else {
        clearInterval(timer);
        rePlay();
        console.log('t');
      }
    });
    $(document).on('click', '#4', function (e) {
      if (3 === index) {
        console.log('e');
        navigate('/information', { state: { type } });
        clearInterval(timer);
      } else {
        clearInterval(timer);
        rePlay();
        console.log('t');
      }
    });
    $(document).on('click', '#rePlay', function (e) {
      // 다시 시작 화면에서 다시시작 선택 시에 페이지를 reload한다.
      window.location.replace('/gamePage1');
    });
  });
  return (
    <div className="gameContainer">
      {lang == 'english' ? (
        <p className="intro">
          Today's menu {type == 'kimchi' ? 'Kimchi stew!' : 'Bulgogi'} <br />{' '}
          Soon Picture of the {type == 'kimchi' ? ' Kimchi stew' : 'Bulgogi'}{' '}
          will appear for 1 second.
          <br />
          Where is The {type == 'kimchi' ? 'Kimchi stew' : 'Bulgogi'} ?
        </p>
      ) : (
        <p className="intro">
          오늘의 메뉴는 {type == 'kimchi' ? '김치찌개!' : '불고기'} <br /> 이제
          곧{type == 'kimchi' ? ' 김치찌개' : ' 불고기'} 사진이 1초동안
          등장합니다.
          <br />
          {type == 'kimchi' ? '김치찌개' : '불고기'}는 어디있을까요?
        </p>
      )}
      <p id="rePlay">{lang == 'english' ? 'RePlay' : '다시 시작'}</p>
      <div className="fireBucket">
        <FireBucket />
      </div>
      <div id="count">
        <p id="countText">
          {lang == 'english' ? 'TimeLimit 6 seconds' : '제한시간 6초'}
        </p>
        <BsFillAlarmFill size={30} color="red" />
      </div>
      <div id="imgBucket"></div>
    </div>
  );
}

export default GamePage1;
