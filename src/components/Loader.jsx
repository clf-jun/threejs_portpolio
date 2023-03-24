import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  //3d 객체가 생성되는데까지 %를 표시해서 기다리는 시간을 가늠하게끔
  return (
    <Html>
      <span className='canvas-load'></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
      >{progress.toFixed(2)}%</p> 
    </Html>
  )
}

export default Loader