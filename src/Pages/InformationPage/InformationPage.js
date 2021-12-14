import React, { useEffect } from 'react';
import gimchi from '../../Image/gimchi/gimchi.png';
import bulgogi from '../../Image/bulgogi/bulgogi.png';
import '../InformationPage/style.css';
import Charicter from '../../Components/Charicter/Charicter';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Data from './Data';
// 게임 성공 시에 이동하는 화면, 정보를 전달하는 화면
function InformationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  let type = location.state.type; // 선택한 메뉴 state 값
  let arr = Data[0][type]; // Data 파일에서 배열을 가져옴, 상황에 맞게 문구를 전달함
  let lang = window.localStorage.getItem('language');
  // 선택한 언어대로 speak함수에 전달하여, 송출될 언어와 텍스트를 넣어줌.
  let langType = lang == 'english' ? 'en-US' : 'ko-KR';
  let langContent = lang == 'english' ? arr[1] : arr[0];
  function speech(event) {
    //api를 이용하여 구현한 음성함성 기능
    if (
      typeof SpeechSynthesisUtterance === 'undefined' ||
      typeof window.speechSynthesis === 'undefined'
    ) {
      alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
    }

    event.preventDefault();
    window.speechSynthesis.cancel(); // 이미 음성이 실행중이면 중단한다.
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
    // 캐릭터 클릭 시에 speeck 함수 실행함.
    $('#goBack').click(function () {
      // 마을로 돌아가기
      window.speechSynthesis.cancel();
      navigate('/market');
    });
    $('#re').click(function () {
      // 게임 선택하러 가기
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
