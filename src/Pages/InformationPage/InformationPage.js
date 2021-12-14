import React, { useEffect, useState } from 'react';
import gimchi from '../../Image/gimchi/gimchi.png';
import bulgogi from '../../Image/bulgogi/bulgogi.png';
import '../InformationPage/style.css';
import Charicter from '../../Components/Charicter/Charicter';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Data from './Data';
function InformationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  let type = location.state.type;
  let arr = Data[0][type];
  let lang = window.localStorage.getItem('language');
  let langType = lang == 'english' ? 'en-US' : 'ko-KR';
  let langContent = lang == 'english' ? arr[1] : arr[0];
  function speech(event) {
    if (
      typeof SpeechSynthesisUtterance === 'undefined' ||
      typeof window.speechSynthesis === 'undefined'
    ) {
      alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
    }
    console.log('E');
    event.preventDefault();
    window.speechSynthesis.cancel();
    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = 1.3; // 음높이: 0 ~ 2
    speechMsg.lang = langType; //"en-US"
    speechMsg.text = langContent;
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
  }

  useEffect(() => {
    $('#sound').click(speech);
    $('#goBack').click(function () {
      window.speechSynthesis.cancel();
      navigate('/market');
    });
    $('#re').click(function () {
      window.speechSynthesis.cancel();
      navigate('/selectGame', { state: true });
    });
  });

  return (
    <div className="infoContainer">
      <p id="re">
        {lang == 'english' ? 'Play another game' : ' 다른 게임 진행하기'}
      </p>
      <div className="twoContainer">
        <div id="imgContainer">
          {type == 'kimchi' ? (
            <img src={gimchi} alt="김치찌개" id="imggimchi" />
          ) : (
            <img src={bulgogi} alt="불고기" id="imggimchi" />
          )}
          {type == 'kimchi' ? (
            <p id="name">Kimchijjigae</p>
          ) : (
            <p id="name">Bulgogi</p>
          )}
        </div>
        <div id="infoDiv">
          <p id="infogimchi">{lang == 'english' ? arr[1] : arr[0]}</p>
          <div id="sound">
            <Charicter />
          </div>
          <p id="info">
            {lang == 'english'
              ? 'When you select a character, information is provided by voice.'
              : '캐릭터를 선택하면 음성으로 정보가 제공됩니다.'}
          </p>
        </div>
      </div>
      <p id="goBack">
        {lang == 'english' ? 'Back to Town' : '마을로 돌아가기'}
      </p>
    </div>
  );
}

export default InformationPage;
