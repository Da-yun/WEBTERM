import { useMemo } from 'react';

export default function Data() {
  const data = useMemo(
    () => [
      { name: '김치찌개', img: '이미지' },
      { name: '된장찌개', img: '이미지' },
    ],
    []
  );

  return data;
}
