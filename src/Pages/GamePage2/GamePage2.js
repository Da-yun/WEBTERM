import '../GamePage2/style.css';
import React, { useEffect } from 'react';
import FireBucket from '../../Components/FireBucket/FireBucket';
import $ from 'jquery';
import { Gi3DHammer, GiSpikesInit } from 'react-icons/gi';
import buchu from '../../Image/buchu.png';
import { useNavigate } from 'react-router-dom';
function GamePage2() {
  const navigate = useNavigate();
  let x = 115;
  let y = -200;
  let cn = 10;
  let timer;
  let target = 10;
  let count = 0;
  let timer2;
  function draw() {
    if (y == 100) {
      clearInterval(timer2);
      navigate('/informationBuchu');
      return false;
    } else {
      var canvas = document.getElementById('canvas2');
      var ctx = canvas.getContext('2d');
      var img = document.getElementById('img');
      ctx.clearRect(0, 0, 200, 200);
      ctx.drawImage(img, x, y, 50, 50);
      y++;
    }
  }
  function rePlay() {
    $('.circle').stop(true);
    $('#hammer').css('display', 'none');
    $('.circle').css('display', 'none');
    $('#countTEXT').css('display', 'none');
    $('.rePlay').css('display', 'block');
    $('.fireBucket').css({ bottom: '30%' });
  }
  function time() {
    timer = setInterval(function () {
      if (cn === 0) {
        clearInterval(timer);
        rePlay();
      } else {
        cn--;
        let counter = '제한시간 ' + cn + '초';
        $('#countTEXT').html(counter);
      }
    }, 1000);
  }
  useEffect(() => {
    setTimeout(function () {
      $('.intro').css('display', 'none');
      $('.fireBucket').css({ position: 'fixed', bottom: '2%' });
      $('#hammer').css('display', 'block');
      $('#countTEXT').css('display', 'block');
      $('.circle').css('display', 'flex');
      time();
    }, 3000);
    $(document).on('click', '.rePlay', function (e) {
      window.location.replace('/gamePage2');
      return false;
    });
    $('#hammer').click(function () {
      count++;
      if (count >= target) {
        $('.circle').stop(true);
        clearInterval(timer);
        $('#hammer').css('display', 'none');
        $('#countTEXT').css('display', 'none');
        $('#canvas2').css('display', 'flex');
        $('.circle').css('display', 'none');
        timer2 = setInterval(draw, 5);
        return false;
      } else {
        $('#hammer').attr('transform', 'rotate(90)');
        $('.circle').animate({
          height: 'toggle',
        });
        setTimeout(function () {
          $('#hammer').attr('transform', 'rotate(0)');
        }, 20);
      }
    });
  });
  return (
    <div className="game2Container">
      <p className="intro">
        오늘의 메뉴는 부추전! <br /> 10초동안 <br />
        망치를 빠르게 클릭하여 박을 터트리세요!
        <br />
      </p>
      <p id="countTEXT">제한시간 10초</p>
      <Gi3DHammer id="hammer" size={70} color="black" />
      <div className="circle"></div>
      <canvas id="canvas2"></canvas>
      <img id="img" src={buchu} alt="부추전" />
      <div className="fireBucket">
        <p className="rePlay">다시 시작</p>
        <FireBucket />
      </div>
    </div>
  );
}
export default GamePage2;
