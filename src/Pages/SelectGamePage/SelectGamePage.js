import '../SelectGamePage/style.css';

// 상점 입장 시 나오는 게임 선택 홈페이지입니다.
// 우선 예로 밥을 선택하였을 때 나오는 화면이고, props로 선택한 카테고리에 따라 내용이 달라집니다.
function SelectGamePage() {
  return (
    <div className="contain">
      <div className="menu">
        <div className="header">
          <span className="korea">대한민국No.1</span>
          <span className="rice">밥심</span>
        </div>
      </div>
      <p className="goback">마을로 돌아가기</p>
      <p className="clear">선택 완료</p>
    </div>
  );
}

export default SelectGamePage;
