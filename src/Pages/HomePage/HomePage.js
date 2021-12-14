import '../HomePage/homestyle.css';
import React, { useState, useEffect } from 'react';
import cyberFunc from '../../Image/cyberfunc.jpg';
import Logo from '../../Components/Logo/Logo';
import cari from '../../Image/1.png';
import { useNavigate } from 'react-router-dom';
import driving from '../../audio/driving.mp3';
import ReactAudioPlayer from 'react-audio-player';
import $ from 'jquery';
// 제일 처음 나오는 홈 페이지입니다.
// 직접 그린 svg를 div 안에 담아 조절하였습니다.
function HomePage() {
  const [color, setColor] = useState('white'); // 로고 색깔을 변하게 하는 state
  const navigate = useNavigate(); // 화면 간 이동에 사용되는 navigate

  let num = 0; //색깔 변화에 사용 되는 변수
  var Array = ['#ff3399', 'white']; // 색깔을 담은 리스트
  let timer;
  let x = -200; // 캔버스에 사용될 좌표 끝에서 부터 나오게 -값으로 줌
  let y = 0;
  useEffect(() => {
    // 페이지 로딩시에 실행되는 useEffect를 통해 색깔을 변화하는 colorChange를 1초마다 실행한다.
    let timer = setInterval(() => colorChange(), 1000);

    return () => {
      clearTimeout(timer);
    };
  });
  function colorChange() {
    // 색깔을 변화하는 함수.
    if (num == 2) num = 0;
    setColor(Array[num]);
    num++;
  }

  function draw() {
    // 게임 시작 선택 시에 오디오 객체를 플레이한다. 이때 오디오는 자동차가 움직이는 소리이다.
    var audio = document.getElementById('carAudio');
    audio.play();
    // 캔버스 객체를 생성하여 차가 이동하는 효과를 준다.
    var canvas = document.getElementById('Canvas');
    var ctx = canvas.getContext('2d');
    var car = document.getElementById('car');
    ctx.clearRect(0, 0, 331, 233); // 잔상을 지워 주는 함수
    ctx.drawImage(car, x, y, 150, 150); // 이미지를 지정한 좌표에 150*150만큼 그린다.
    if (x == 700) {
      clearInterval(timer);
      // x가 끝까지 도달하면 marketPage로 이동한다.
      navigate('/market', { state: true });
    }
    x += 1;
  }
  const btnColorChange = (e) => {
    // 버튼 선택 시 색깔을 바꿔주는 함수.
    // 하나 선택 후 다른 것을 또 선택하면 이전꺼는 자동으로 다시 원래색으로 바뀐다.
    if (e.target.id == 'korean') {
      let english = document.getElementById('english').style;
      english.color = 'white';
      let changeTaget = document.getElementById(e.target.id);
      changeTaget.style.color == 'red'
        ? (changeTaget.style.color = 'white')
        : (changeTaget.style.color = 'red');
    } else {
      let korean = document.getElementById('korean').style;
      korean.color = 'white';
      let changeTaget = document.getElementById(e.target.id);
      changeTaget.style.color == 'red'
        ? (changeTaget.style.color = 'white')
        : (changeTaget.style.color = 'red');
    }
  };
  function goGame() {
    // 게임 시작 선택 시에 실행하는 함수.
    // 글씨색이 빨간색인 것을 찾아 글씨로 지정한다.
    // 만약 선택하지 않았으면 선택하라는 경고가 나온다.
    let korean = document.getElementById('korean').style;
    let english = document.getElementById('english').style;
    if (korean.color != 'red' && english.color != 'red') {
      alert('Select Your Ranguage.');
    } else {
      let language = english.color == 'red' ? 'english' : 'korean';
      window.localStorage.setItem('language', language); // localstorage 이용
      timer = setInterval(draw, 5); // draw함수로 캔버스로 그리는 효과를 줌
    }
  }

  return (
    <div className="container">
      <img className="img" src={cyberFunc} alt="logo"></img>
      <ReactAudioPlayer id="carAudio" src={driving} />
      <div className="logo">
        <Logo color={color} />
        <p className="choice">Choice Your Ranguage!</p>
        <div className="language">
          <button id="english" onClick={btnColorChange}>
            English
          </button>
          <button id="korean" onClick={btnColorChange}>
            Korean
          </button>
        </div>
        <div className="containergo">
          <button className="go" onClick={goGame}>
            Let's Tour!
          </button>
        </div>
      </div>
      <canvas id="Canvas"></canvas>
      <img src={cari} alt="car" id="car"></img>
    </div>
  );
}

export default HomePage;
