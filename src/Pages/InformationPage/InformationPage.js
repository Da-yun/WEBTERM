import React, { useEffect, useState } from 'react';
import gimchi from '../../Image/gimchi/gimchi.png';
import '../InformationPage/style.css';
import Charicter from '../../Components/Charicter/Charicter';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
function InformationPage() {
  const navigate = useNavigate();
  function speech() {
    if (
      typeof SpeechSynthesisUtterance === 'undefined' ||
      typeof window.speechSynthesis === 'undefined'
    ) {
      alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
    }

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1; // 속도: 0.1 ~ 10
    speechMsg.pitch = 1.2; // 음높이: 0 ~ 2
    speechMsg.lang = 'ko-KR'; //"en-US"
    speechMsg.text =
      '김치찌개는 대표적인 한국 요리 중 하나로 김치를 넣고 얼큰하게 끓인 찌개이다. 된장찌개, 순두부찌개와 함께 가장 널리 알려진 찌개 요리이다.';
    // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
    window.speechSynthesis.speak(speechMsg);
  }
  useEffect(() => {
    $('#sound').click(speech);
    $('#goBack').click(function () {
      navigate('/market');
    });
    $('#re').click(function () {
      navigate('/selectGame');
    });
  });

  return (
    <div className="infoContainer">
      <p id="re">다른 게임 진행하기</p>
      <div className="twoContainer">
        <div id="imgContainer">
          <img src={gimchi} alt="김치찌개" id="imggimchi" />
          <p id="name">kimchijjigae</p>
        </div>
        <div id="infoDiv">
          <p id="infogimchi">
            김치찌개는 대표적인 한국 요리 중 하나로 <br /> 김치를 넣고 얼큰하게
            끓인 찌개이다.
            <br /> 된장찌개, 순두부찌개와 함께 가장 널리 알려진 찌개 요리이다.
          </p>
          <div id="sound">
            <Charicter />
          </div>
          <p id="info"> 캐릭터를 선택하면 음성으로 정보가 제공됩니다.</p>
        </div>
      </div>
      <p id="goBack">마을로 돌아가기</p>
    </div>
  );
}

export default InformationPage;
