// src > hooks > useUpdate.js

import { useRef, useEffect } from 'react';

export default function useUpdate(cb) {
  const isMountRef = useRef(false); // 값을 저장하는 컴포넌트 변수로 활용

  useEffect(()=>{
    if(!isMountRef.current) {
      isMountRef.current = true;
      return ;
    }
    console.log('업데이트');
    cb();
  });
}