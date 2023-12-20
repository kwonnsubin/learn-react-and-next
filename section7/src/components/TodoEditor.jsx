// src > components > TodoEditor

import { useRef, useState, useContext } from 'react';
import './TodoEditor.css';
import { TodoDispatchContext } from '../TodoContext';

export default function TodoEditor() {
  const { handleCreateTodo } = useContext(TodoDispatchContext);

  const [ content, setContent ] = useState('');
  const inputRef = useRef();

  // Todo Content 내용
  const handleChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 추가 버튼 클릭 이벤트
  const handleClickAddBtn = () => {
    if(content == '') {
      inputRef.current.focus();
      return;
    }
    handleCreateTodo(content);
    setContent('');
  };

  // 글 작성 후 엔터키 눌렀을 때 이벤트
  const onkeyDown = (e) => {
    if(e.keyCode === 13) { // 13번 = Enter
      handleClickAddBtn();
    }
  };

  return (
    <div className="TodoEditor">
      <input ref={ inputRef } value={ content } onChange={ handleChangeContent } onKeyDown={ onkeyDown } placeholder='새로운 Todo ...'/>
      <button onClick={ handleClickAddBtn }>추가</button>
    </div>
  );
}