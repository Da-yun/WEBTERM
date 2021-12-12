import '../GamePage2/style.css';
import React, { useEffect } from 'react';
import FireBucket from '../../Components/FireBucket/FireBucket';
import $ from 'jquery';
import { Gi3DHammer, GiSpikesInit } from 'react-icons/gi';

function GamePage2() {
  let x = 0;
  let cn = 10;
  let timer;
  let target = 30;
  let count = 0;
  let y = -40;
  function draw() {
    var canvas = document.getElementById('canvas3');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 150, 75);

    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
    x++;
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
      $('#canvas2').css('display', 'flex');
      time();
      setTimeout(function () {}, 9000);
    }, 3000);
    $(document).on('click', '.rePlay', function (e) {
      window.location.replace('/gamePage2');
    });
    $('#hammer').click(function () {
      count++;
      console.log(count);
      $('#hammer').attr('transform', 'rotate(90)');
      $('.circle').animate({
        height: 'toggle',
      });
      setTimeout(function () {
        $('#hammer').attr('transform', 'rotate(0)');
      }, 20);
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
      <div className="fireBucket">
        <p className="rePlay">다시 시작</p>
        <FireBucket />
      </div>
    </div>
  );
}
export default GamePage2;
