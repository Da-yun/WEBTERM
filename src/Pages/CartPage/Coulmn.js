import { useMemo } from 'react';

export default function Column() {
  const Column = useMemo(
    () => [
      {
        Header: '이름',
        accessor: '이름',
      },
      {
        Header: '사진',
        accessor: '사진',
      },
    ],
    []
  );
  return Column;
}
