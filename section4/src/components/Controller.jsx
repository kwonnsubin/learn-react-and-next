// src > components > Controller.jsx

import useUpdate from '../hooks/useUpdate';

export default function Controller({ handleChangeCount }) {
  useUpdate(()=> {
    console.log('CONTROLLER 컴포넌트 업데이트');
  });

  return (
    <div>
      <button onClick={ ()=> {handleChangeCount(-1);} }>-1</button>
      <button onClick={ ()=> {handleChangeCount(-10);} }>-10</button>
      <button onClick={ ()=> {handleChangeCount(-100);} }>-100</button>
      <button onClick={ ()=> {handleChangeCount(+100);} }>+100</button>
      <button onClick={ ()=> {handleChangeCount(+10);} }>+10</button>
      <button onClick={ ()=> {handleChangeCount(+1);} }>+1</button>
    </div>
  );
}