import '../HomePage/homestyle.css';
import React, { useState, useEffect } from 'react';
import cyberFunc from '../../Image/cyberfunc.jpg';
import Logo from '../../Components/Logo/Logo';
import cari from '../../Image/1.png';
import { useNavigate } from 'react-router-dom';

// 제일 처음 나오는 홈 페이지입니다.
// 직접 그린 svg를 div 안에 담아 조절하였습니다.
function HomePage() {
  const [color, setColor] = useState('white');
  const navigate = useNavigate();

  let num = 0;
  var Array = ['#ff3399', 'white'];
  let timer;
  let x = -200;
  let y = 0;
  useEffect(() => {
    let timer = setInterval(() => colorChange(), 1000);
    return () => {
      clearTimeout(timer);
    };
  });
  function colorChange() {
    if (num == 2) num = 0;
    setColor(Array[num]);
    num++;
  }
  function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var car = document.getElementById('car');
    ctx.clearRect(0, 0, 331, 233);
    ctx.drawImage(car, x, y, 150, 150);
    if (x == 700) {
      clearInterval(timer);
      navigate('/market');
    }
    x += 1;
  }
  const btnColorChange = (e) => {
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
    let korean = document.getElementById('korean').style;
    let english = document.getElementById('english').style;
    if (korean.color != 'red' && english.color != 'red') {
      alert('언어를 먼저 선택하세요');
    } else {
      timer = setInterval(draw, 5);
    }
  }

  return (
    <div className="container">
      <img src={cyberFunc} alt="logo"></img>
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
      <canvas id="canvas"></canvas>
      <img src={cari} alt="car" id="car"></img>
    </div>
  );
}

export default HomePage;
