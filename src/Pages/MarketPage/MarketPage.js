import '../MarketPage/style.css';
import MarketRice from '../../Components/MarketRice/MarketRice';
import MarketDesert from '../../Components/MarketDesert/MarketDesert';
import MarketWall from '../../Components/MarketWall/MarketWall';
import Picket from '../../Components/Picket/Picket';
import Charicter from '../../Components/Charicter/Charicter';
import { useLocation } from 'react-router-dom';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import backSong from '../../audio/Blue.mp3';
import open from '../../audio/door.mp3';
import ReactAudioPlayer from 'react-audio-player';
import { useNavigate } from 'react-router-dom';
//게임을 선택하는 MarketPage입니다.
// 컴포넌트 파일에서 필요한 컴포넌트를 가져와 생성하였습니다.
function MarketPage() {
  const location = useLocation();
  const navigate = useNavigate();
  let x = 0;
  let y = 0;
  const [isPlay, setIsPlay] = useState(false);
  let type = location.state;

  function animation() {
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
  function goGame() {
    navigate('/selectGame', { state: true });
  }
  function music() {
    setIsPlay(true);
  }
  useEffect(() => {
    setTimeout(music, 5000);
    var container = $('.container');
    var rice = $('#rice');
    var desert = $('#desert');
    rice.click(function (e) {
      type = e.target.id;
      $('.charicter').fadeOut(goGame);
    });
    desert.click(function (e) {
      type = e.target.id;
      $('.charicter').fadeOut(goGame('desert'));
    });
    container.click(function (e) {
      x = e.pageX;
      y = e.pageY;
      //$('.charicter').appendTo('#move');
      $('.charicter').fadeOut(animation);
    });
  }, []);
  return (
    <div className="container">
      {isPlay ? (
        <ReactAudioPlayer
          id="audio"
          src={backSong}
          autoPlay={true}
          loop={true}
        />
      ) : null}
      {!isPlay ? (
        <ReactAudioPlayer id="doorAudio" src={open} autoPlay={type} />
      ) : null}
      <div className="line1">
        <svg
          width="444"
          height="1013"
          className="repeat"
          viewBox="0 0 444 1013"
          fill="#FCAF3C"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M436 -10.6539C437.445 139.285 436.862 285.069 403.628 377.007C370.317 468.946 302.252 502.884 261.303 595.417C220.432 687.949 206.6 839.076 168.226 918.363C129.851 997.472 66.9323 1004.74 4.01376 1012.01L-3.76325 -11.6606L436 -10.6539Z"
            fill="#FCAF3C"
          />
        </svg>
        <MarketRice />
      </div>
      <div className="line2">
        <svg
          width="570"
          height="1024"
          viewBox="0 0 570 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0527 1130C17.7641 979.63 22.3785 829.461 51.3074 696.744C80.2363 564.027 133.482 448.96 190.875 366.505C248.37 284.244 310.11 234.395 373.738 176.212C437.268 118.229 502.782 51.5143 568.199 -15L581.252 1113.97L13.0527 1130Z"
            fill="#FCAF3C"
          />
        </svg>
        <div className="home2">
          <MarketDesert />
        </div>
      </div>
      <div className="footer">
        <div className="wall">
          <MarketWall className="wall" />
          <MarketWall className="wall" />
        </div>
      </div>
      <p className="cart">장바구니</p>
      <div className="picket">
        <Picket />
      </div>
      {isPlay ? (
        <div className="charicter">
          <Charicter />
        </div>
      ) : null}
    </div>
  );
}

export default MarketPage;
