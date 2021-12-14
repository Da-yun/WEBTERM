import '../SelectGamePage/style.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu1 from '../../Components/MenuContainer/Menu1';
import Menu2 from '../../Components/MenuContainer/Menu2';
import Menu3 from '../../Components/MenuContainer/Menu3';
import { useNavigate } from 'react-router-dom';
import king from '../../audio/King.mp3';
import ReactAudioPlayer from 'react-audio-player';
import wall from '../../Image/selectgame.jpg';
import $ from 'jquery';

// 상점 입장 시 나오는 게임 선택 홈페이지입니다.

function SelectGamePage() {
  const location = useLocation();
  const navigate = useNavigate(); // 화면간 이동 시에 사용되는 navigate 입니다.
  let type = location.state;
  let lang = window.localStorage.getItem('language'); // localstorage에서 선택한 언어를 받아옵니다.
  useEffect(() => {
    var item1 = $('.menu1'); // 김치찌개
    console.log(type);
    // mouseenter와 leave 이벤트를 감지하여 animate함수를 실행합니다. 영역이 커지면서 옆에 메뉴들이 밀리는 효과가 나타납니다.
    item1.mouseenter(function (e) {
      item1.animate({ width: '+=150px' });
    });
    item1.click(function () {
      // 김치찌개 선택 시 gamePage1로 이동합니다.
      navigate('/gamePage1', { state: 'kimchi' });
    });
    item1.mouseleave(function (e) {
      item1.animate({ width: '-=150px' });
    });
    var item2 = $('.menu2'); // 부추전
    item2.mouseenter(function (e) {
      item2.animate({ width: '+=150px' });
    });
    item2.mouseleave(function (e) {
      item2.animate({ width: '-=150px' });
    });
    item2.click(function (e) {
      // 부추전 선택 시에 GamePage2로 이동합니다.
      navigate('/gamePage2');
      return false;
    });
    var item3 = $('.menu3'); // 불고기
    item3.click(function (e) {
      // 불고기 선택 시 gamePage1로 이동합니다.
      navigate('/gamePage1', { state: 'bulgogi' });
      return false;
    });
    item3.mouseenter(function (e) {
      item3.animate({ width: '+=150px' });
    });
    item3.mouseleave(function (e) {
      item3.animate({ width: '-=150px' });
    });
  }, []);

  return (
    <div className="contain">
      <img src={wall} alt="background" id="backgroundWall" />
      <div className="menu">
        <ReactAudioPlayer id="audio" src={king} autoPlay={type} loop={true} />
        <div className="menu1">
          <Menu1 />
        </div>
        <div className="menu2">
          <Menu2 />
        </div>
        <div className="menu3">
          <Menu3 />
        </div>
      </div>
      <p className="goback" onClick={() => navigate('/market')}>
        {lang == 'english' ? 'Back to Town' : '마을로 돌아가기'}
      </p>
    </div>
  );
}

export default SelectGamePage;
