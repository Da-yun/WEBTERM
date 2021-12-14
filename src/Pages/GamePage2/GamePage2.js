import '../GamePage2/style.css';
import React, { useEffect } from 'react';
import FireBucket from '../../Components/FireBucket/FireBucket';
import $ from 'jquery';
import { Gi3DHammer } from 'react-icons/gi';
import buchu from '../../Image/buchu.png';
import { useNavigate } from 'react-router-dom';
//부추전 게임 화면
function GamePage2() {
  const navigate = useNavigate();
  let lang = window.localStorage.getItem('language'); // 선택한 언어를 받아온다.
  let x = 115; // 부추가 떨어지기 위해 지정해놓은 canvas 중앙 값
  let y = -200; // 부차가 떨어지기 위해 지정해 놓은 y 좌표
  let cn = 10; // 제한 시간 10초
  let timer;
  let target = 30; // 클릭해야 하는 count 값
  let count = 0; // 실제 click한 count 값
  let timer2;
  function draw() {
    // 떨어지는 기능을 구현한 함수.

    if (y == 100) {
      // 부추가 아궁이에 닿는 순간 화면 이동을 하고 타이머를 없앤다.
      clearInterval(timer2);
      navigate('/informationBuchu');
      return false;
    } else {
      // 아궁이에 닿기 전까지 위에서 떨어지는 효과를 구현한다. drawimage 함수를 통해 구현하였다.
      var canvas = document.getElementById('canvas2');
      var ctx = canvas.getContext('2d');
      var img = document.getElementById('img');
      ctx.clearRect(0, 0, 200, 200);
      ctx.drawImage(img, x, y, 50, 50);
      y++;
    }
  }
  function rePlay() {
    // 재시작 화면으로 가기 위한 셋팅 함수
    $('.circle').stop(true);
    $('#hammer').css('display', 'none');
    $('.circle').css('display', 'none');
    $('#countTEXT').css('display', 'none');
    $('#rePlay').css('display', 'block');
    $('.fireBucket').css({ bottom: '20%' });
  }
  function time() {
    // 1초가 지날 때마다 count 값을 감소시키고 0이 되면 재시작 화면으로 간다.
    timer = setInterval(function () {
      if (cn === 0) {
        clearInterval(timer);
        rePlay();
      } else {
        cn--;
        //선택한 언어에 따라 카운터 값을 바꿔준다.
        if (lang == 'english') {
          let counter = 'TimeLimit ' + cn + 'seconds';
          $('#countTEXT').html(counter);
        } else {
          let counter = '제한시간 ' + cn + '초';
          $('#countTEXT').html(counter);
        }
      }
    }, 1000);
  }
  useEffect(() => {
    setTimeout(function () {
      //3초동안 intro 제시 후에 게임 셋팅을 한다.
      $('.intro').css('display', 'none');
      $('.fireBucket').css({ position: 'fixed', bottom: '2%' }); // 아궁이 컴포넌트
      $('#hammer').css('display', 'block'); // 망치 컴포넌트
      $('#countTEXT').css('display', 'block'); // 카운터 컴포넌트
      $('.circle').css('display', 'flex'); // 박 컴포넌트
      time(); // 타이머 시작
    }, 3000);
    $(document).on('click', '#rePlay', function (e) {
      window.location.replace('/gamePage2'); // 다시 시작을 클릭하면 페이지 재실행
      return false;
    });
    $('#hammer').click(function () {
      count++;
      // 망치를 클릭할 때마다 coount 값은 게혹해서 증가한다.
      if (count >= target) {
        // count가 넘는 순간 타이머와 박과 망치, 카운터를 다 없앤다.
        // 부추가 떨어지는 효과 시작
        $('.circle').stop(true);
        clearInterval(timer);
        $('#hammer').css('display', 'none');
        $('#countTEXT').css('display', 'none');
        $('#canvas2').css('display', 'flex');
        $('.circle').css('display', 'none');
        timer2 = setInterval(draw, 5);
        return false;
      } else {
        // 아직 도달하지 못했을 때 망치는 회전하는 효과와 박은 toggle로 변하는 효과를 준다.
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
      {lang == 'english' ? (
        <p className="intro">
          Today's menu is Buchujeon! <br /> For 10 seconds <br />
          Click the hammer Quickly to pop the gourd!
          <br />
        </p>
      ) : (
        <p className="intro">
          오늘의 메뉴는 부추전! <br /> 10초동안 <br />
          망치를 빠르게 클릭하여 박을 터트리세요!
          <br />
        </p>
      )}
      <p id="countTEXT">
        {lang == 'english' ? 'TimeLimit 10 seconds' : '제한시간 10초'}
      </p>
      <Gi3DHammer id="hammer" size={70} color="black" />
      <div className="circle"></div>
      <canvas id="canvas2"></canvas>
      <img id="img" src={buchu} alt="부추전" />
      <div className="fireBucket">
        <p id="rePlay">{lang == 'english' ? 'RePlay' : '다시 시작'}</p>
        <FireBucket />
      </div>
    </div>
  );
}
export default GamePage2;
