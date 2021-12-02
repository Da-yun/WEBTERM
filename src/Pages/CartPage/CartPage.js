import '../CartPage/style.css';
import React from 'react';
import { useTable } from 'react-table';
import Data from '../CartPage/Data'; // 테이블 cell에 들어갈 데이터파일입니다.
import Column from '../CartPage/Coulmn'; // 테이블 column 데이터 파일입니다.

// 장바구니 클릭 시 이동하는 장바구니 화면입니다.
// react 라이브러리인 react-table을 사용하여 테이블을 구성합니다.
// 아직 데이터 작업이 이루어지지 않아 테이블 컴포넌트만 생성한 상태입니다.
function CartPage() {
  const data = Data();
  const columns = Column();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="container">
      <p>장바구니</p>
      <div className="table">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button>결제하기</button>
      </div>
    </div>
  );
}

export default CartPage;
