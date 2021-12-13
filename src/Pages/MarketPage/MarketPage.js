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
import { Gi3DStairs, GiStreetLight } from 'react-icons/gi';
import { BsFillTreeFill } from 'react-icons/bs';
import ReactAudioPlayer from 'react-audio-player';
import { useNavigate } from 'react-router-dom';
//게임을 선택하는 MarketPage입니다.
// 컴포넌트 파일에서 필요한 컴포넌트를 가져와 생성하였습니다.
function MarketPage() {
  function speech(event) {
    if (
      typeof SpeechSynthesisUtterance === 'undefined' ||
      typeof window.speechSynthesis === 'undefined'
    ) {
      alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
    }

    window.speechSynthesis.cancel();
    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = 1; // 음높이: 0 ~ 2
    speechMsg.lang = 'ko-KR'; //"en-US"
    speechMsg.text = '무궁화 꽃이 피었습니다.';
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
  }
  const location = useLocation();
  const navigate = useNavigate();
  let x = 0;
  let y = 0;
  let type = location.state;
  let time = '';
  const [isShow, setIsShow] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [color, setColor] = useState('red');
  let canMove = false;

  function animation() {
    if (y <= 20) {
      navigate('/cartPage', { state: true });
      clearTimeout(time);
      window.speechSynthesis.cancel();
      return false;
    } else {
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
    navigate('/selectGame', { state: true });
    clearTimeout(time);
    window.speechSynthesis.cancel();
    return false;
  }
  function gameStart() {
    speech();
    time = setTimeout(function () {
      window.speechSynthesis.cancel();
      canMove = true;
      setColor('black');
      Game();
    }, 2000);
  }
  function Game() {
    time = setTimeout(function () {
      canMove = false;
      setColor('red');
      gameStart();
    }, 8000);
  }
  function music() {
    setIsShow(true);
    setTimeout(function () {
      setIsPlay(true);
      setIsShow(false);
    }, 5000);
  }
  function first() {
    canMove = false;
    gameStart();
  }

  useEffect(() => {
    console.log(type);
    type === true ? music() : setIsPlay(true);
    first();
    var container = $('#container');
    var rice = $('#rice');
    var desert = $('#desert');
    rice.click(function (e) {
      console.log(canMove);
      if (canMove) {
        $('.charicter').fadeOut(goGame);
      }
    });
    desert.click(function (e) {
      //type = e.target.id;
      if (canMove) {
        $('.charicter').fadeOut(goGame('desert'));
      }
    });
    container.click(function (e) {
      x = e.pageX;
      y = e.pageY;
      //$('.charicter').appendTo('#move');
      if (canMove) {
        console.log(canMove);
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
