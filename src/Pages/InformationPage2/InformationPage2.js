import React, { useEffect, useState } from 'react';
import gimchi from '../../Image/gimchi/gimchi.png';
import '../InformationPage/style.css';
import Charicter from '../../Components/Charicter/Charicter';
import $ from 'jquery';
import buchu from '../../Image/buchu.png';
import { useNavigate } from 'react-router-dom';
function InformationPage2() {
  const navigate = useNavigate();
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
    speechMsg.lang = 'en-US'; //"en-US"
    speechMsg.text =
      'It is a dish made with wheat flour and 부추 as the main ingredients, and is fried in oil. In Korea, it is a favorite food on rainy days, and leek helps to recover from fatigue. How to say this in Korean';
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);

    speechMsg.lang = 'ko-KR'; //"en-US"
    speechMsg.text = '부추전';
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
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
      <p id="re">Play another game</p>
      <div className="twoContainer">
        <div id="imgContainer">
          <img src={buchu} alt="김치찌개" id="imggimchi" />
          <p id="name">buchujeon</p>
        </div>
        <div id="infoDiv">
          <p id="infogimchi">
            It is a dish made with wheat flour and buchu as the main
            ingredients, and is fried in oil. <br />
            In Korea, it is a favorite food on rainy days, and leek helps to
            recover from fatigue. <br />
            How to say this in Korean "부추전"
          </p>
          <div id="sound">
            <Charicter />
          </div>
          <p id="info">
            {' '}
            When you select a character, information is provided by voice.
          </p>
        </div>
      </div>
      <p id="goBack">back to town</p>
    </div>
  );
}

export default InformationPage2;
