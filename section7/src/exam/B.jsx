import { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'DECREASE':
      return state - action.data;
    case 'INCREASE':
      return state + action.data;
  }
}

export default function B() {
  const [ count, dispatch ] = useReducer(reducer, 0); // (state, state 초기값)
  // count : state 값
  // dispatch : 함수(트리거) 상태변화를 발동시키는 트리거, reducer() 호출시켜줌

  return (
    <div>
      <h4>{ count }</h4>
      <div>
        <button onClick={ ()=>{
          dispatch({
            type : 'DECREASE', data: 1
          });
        } }>-</button>
        <button onClick={ ()=>{
          dispatch({
            type : 'INCREASE', data: 1
          });
        } }>+</button>
      </div>
    </div>
  );
}