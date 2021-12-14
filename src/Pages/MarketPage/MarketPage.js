import '../MarketPage/style.css';
import MarketRice from '../../Components/MarketRice/MarketRice';
import MarketDesert from '../../Components/MarketDesert/MarketDesert';
import Boss from '../../Components/Charicter/Boss';
import Charicter from '../../Components/Charicter/Charicter';
import { useLocation } from 'react-router-dom';
import OneCharicter from '../../Components/Charicter/OneCharicter';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import open from '../../audio/door.mp3';
import { GiStreetLight } from 'react-icons/gi';
import { BsFillTreeFill } from 'react-icons/bs';
import ReactAudioPlayer from 'react-audio-player';
import { useNavigate } from 'react-router-dom';

//게임을 선택하는 MarketPage입니다.
// 컴포넌트 파일에서 필요한 컴포넌트를 가져와 생성하였습니다.
function MarketPage() {
  // speech 함수는 무궁화 꽃이 피었습니다를 웹 api를 이용하여 음성으로 출력하는 함수입니다.
  function speech(event) {
    window.speechSynthesis.cancel();
    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = 1.7; // 음높이: 0 ~ 2
    speechMsg.lang = 'ko-KR'; //"en-US"
    speechMsg.text = '무궁화 꽃이 피었습니다.';
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
  }
  const location = useLocation(); // 화면간 이동 시 전달한 값을 전달받을 수 있는 location입니다.
  const navigate = useNavigate(); // 화면간 이동 시 사용하는 naivate입니다.
  let x = 0; //유저가 화면 클릭 시 이동할 때 좌표를 받아올 변수입니다.
  let y = 0;

  let type = location.state; // HomeScreen에서 왔는지 확인하기 위한 변수입니다.
  let time = '';
  const [isShow, setIsShow] = useState(false); // 캐릭터 display를 조정하기 위한 변수입니다.
  const [isPlay, setIsPlay] = useState(false); // 등장 음악을 컨트롤 하는 변수입니다.
  const [color, setColor] = useState('red'); // 캐릭터의 눈색깔을 빨간색으로 초기화하고 바꿔주는 변수입니다.
  let canMove = false; // 캐릭터 이동을 조정하기 위한 변수입니다.

  function animation() {
    // 해당 함수는 화면 클릭 시 이동을 하거나, CartPage로 이동하기 위해 생성하였습니다.
    if (y <= 20) {
      // 바운더리에 가깝게 클릭 시에 cartpage로 이동하고 timer와 음성을 정지합니다.
      navigate('/cartPage', { state: true });
      clearTimeout(time);
      window.speechSynthesis.cancel();
      return false;
    } else {
      //  css로 선택한 좌표값을 top과 left로 넘겨 캐릭터 이동 효과를 구현하였습니다. 제이쿼리의 fadeIn함수를 이용하였습니다.
      $('.charicter')
        .css({
          top: y,
          left: x,
          width: 'max-content',
          height: 'max-content',
          position: 'absolute',
        })
        .fadeIn();
    }
  }
  function goGame() {
    // 상점을 선택하면 게임 선택화면으로 이동하는 함수입니다. 마찬가지로 모든 것을 초기화한 후 이동합니다.
    navigate('/selectGame', { state: true });
    clearTimeout(time);
    window.speechSynthesis.cancel();
    return false;
  }
  function gameStart() {
    // 해당 페이지 실행 후 Game함수와 반본적으로 실행되는 함수입니다.
    speech(); // 무궁화 음성을 틉니다.
    time = setTimeout(function () {
      // 2초후에 정지하고 캐릭터가 움직일 수 있도록 canMove값과 눈색깔을 변경합니다.
      window.speechSynthesis.cancel();
      canMove = true;
      setColor('black');
      Game();
    }, 2000);
  }
  function Game() {
    // 8초가 지나면 다시 못움직이게 바꾸고 음성을 송출합니다.
    time = setTimeout(function () {
      canMove = false;
      setColor('red');
      gameStart();
    }, 8000);
  }
  function music() {
    // 차에서 내리는 음악을 틀기 위한 함수입니다. HomePage에서 이동 시에만 실행됩니다.
    setIsShow(true); // 캐릭터는 사라집니다.
    setTimeout(function () {
      setIsPlay(true); // 음악이 멈추고
      setIsShow(false); // 캐릭터는 나타납니다.
    }, 5000);
  }
  function first() {
    canMove = false; // 캐릭터 이동을 제어하고
    gameStart(); // 무궁화를 재생합니다.
  }

  useEffect(() => {
    type === true ? music() : setIsPlay(true);
    first();
    var container = $('#container'); // 화면 전체
    var rice = $('#rice'); // 라이스 푸드트럭
    var desert = $('#desert'); // 디저트 푸드트럭
    rice.click(function (e) {
      console.log(canMove);
      if (canMove) {
        // 라이스 푸드트럭 선택 시에 움직일 수 있는지 확인하고, goGame 실행
        $('.charicter').fadeOut(goGame);
      }
    });
    desert.click(function (e) {
      //type = e.target.id;
      if (canMove) {
        // 디저트 푸드트럭 선택 시에 움직일 수 있는지 확인하고, goGame 실행
        $('.charicter').fadeOut(goGame('desert'));
      }
    });
    container.click(function (e) {
      x = e.pageX;
      y = e.pageY;
      //$('.charicter').appendTo('#move');
      if (canMove) {
        // 캐릭터 이동효과를 구현
        $('.charicter').fadeOut(animation);
      }
    });
  }, []);
  return (
    <div id="container">
      {!isPlay ? (
        <ReactAudioPlayer id="doorAudio" src={open} autoPlay={type} />
      ) : null}
      <BsFillTreeFill size={80} color="green" id="tree" />
      <div id="one">
        <Charicter />
        <Boss color={color} />
        <Charicter />
      </div>
      <div id="line"></div>
      <GiStreetLight id="light" size={190} color="yellow" />
      <div className="line1">
        <MarketRice />
      </div>
      <div className="line2">
        <div className="home2">
          <MarketDesert />
        </div>
      </div>
      {!isShow ? (
        <div className="charicter">
          <OneCharicter />
        </div>
      ) : null}
    </div>
  );
}

export default MarketPage;
