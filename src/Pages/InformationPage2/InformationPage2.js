import React, { useEffect, useState } from 'react';
import gimchi from '../../Image/gimchi/gimchi.png';
import '../InformationPage/style.css';
import Charicter from '../../Components/Charicter/Charicter';
import $ from 'jquery';
import buchu from '../../Image/buchu.png';
import { useNavigate } from 'react-router-dom';
// 게임 성공 시에 이동하는 화면, InformationPage1과 전달 내용 빼고 거의 다같음.
function InformationPage2() {
  const navigate = useNavigate();
  let lang = window.localStorage.getItem('language');
  let langType = lang == 'english' ? 'en-US' : 'ko-KR';
  function speech(event) {
    if (
      typeof SpeechSynthesisUtterance === 'undefined' ||
      typeof window.speechSynthesis === 'undefined'
    ) {
      alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
    }
    console.log('e');
    window.speechSynthesis.cancel();
    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 0.9; // 속도: 0.1 ~ 10
    speechMsg.pitch = 1; // 음높이: 0 ~ 2
    speechMsg.lang = langType; //"en-US"
    if (lang == 'english') {
      speechMsg.text =
        'It is a dish made with wheat flour and 부추 as the main ingredients, and is fried in oil. In Korea, it is a favorite food on rainy days, and leek helps to recover from fatigue. How to say this in Korean';
      // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
      window.speechSynthesis.speak(speechMsg);

      speechMsg.lang = 'ko-KR'; //"en-US"
      speechMsg.text = '부추전';
      // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
      window.speechSynthesis.speak(speechMsg);
    } else {
      speechMsg.text =
        '부추전은 밀가루와 부추를 주재료로 하여 기름에 튀긴 요리이다.한국에서는 비오는 날 즐겨먹는 음식으로 부추는 피로회복에 도움이 된다.';
      // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
      window.speechSynthesis.speak(speechMsg);
    }
  }
  useEffect(() => {
    $('#sound').click(speech);
    $('#goBack').click(function () {
      navigate('/market');
    });
    $('#re').click(function () {
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
          <img src={buchu} alt="김치찌개" id="imggimchi" />
          <p id="name">buchujeon</p>
        </div>
        <div id="infoDiv">
          {lang == 'english' ? (
            <p id="infogimchi">
              It is a dish made with wheat flour and buchu as the main
              ingredients, and is fried in oil. <br />
              In Korea, it is a favorite food on rainy days, <br /> and leek
              helps to recover from fatigue. <br />
              How to say this in Korean "부추전"
            </p>
          ) : (
            <p id="infogimchi">
              부추전은 밀가루와 부추를 주재료로 하여 기름에 튀긴 요리입니다.
              한국에서는 비오는 날 즐겨먹는 음식으로 부추는 피로회복에 도움이
              된다.
            </p>
          )}
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

export default InformationPage2;
