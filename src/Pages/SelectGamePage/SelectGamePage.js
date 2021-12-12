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
// 우선 예로 밥을 선택하였을 때 나오는 화면이고, props로 선택한 카테고리에 따라 내용이 달라집니다.
function SelectGamePage() {
  const location = useLocation();
  const navigate = useNavigate();
  let type = location.state;
  useEffect(() => {
    var item1 = $('.menu1');
    console.log(type);
    item1.mouseenter(function (e) {
      item1.animate({ width: '+=150px' });
    });
    item1.click(function () {
      navigate('/gamePage1', { state: 'kimchi' });
    });
    item1.mouseleave(function (e) {
      item1.animate({ width: '-=150px' });
    });
    var item2 = $('.menu2');
    item2.mouseenter(function (e) {
      item2.animate({ width: '+=150px' });
    });
    item2.mouseleave(function (e) {
      item2.animate({ width: '-=150px' });
    });
    item2.click(function (e) {
      navigate('/gamePage2');
    });
    var item3 = $('.menu3');
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
      <p className="goback" onClick={() => navigate(-1)}>
        마을로 돌아가기
      </p>
      <p className="goback" onClick={() => navigate(-1)}>
        마을로 돌아가기
      </p>
    </div>
  );
}

export default SelectGamePage;
