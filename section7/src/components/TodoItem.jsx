// scr > components > TodoItem.jsx

import './TodoItem.css';
import { memo } from 'react';

function TodoItem(
  { id, isDone, createdDate, content, handleUpdateTodo, handleDeleteTodo }
) {

  const handleChangeCheckbox = () => {
    handleUpdateTodo(id);
  };

  const handleClickDeleteBtn = () => {
    handleDeleteTodo(id);
  };

  return (
    <div className="TodoItem">
      <input type="checkbox" checked={ isDone } onChange={ handleChangeCheckbox }/>
      <div className="content">{ content }</div>
      <div className="date">{ new Date(createdDate).toLocaleDateString() }</div>
      <button onClick={ handleClickDeleteBtn }>삭제</button>
      { /* <button onClick={ handleClickDeleteBtn() }>삭제</button> X */ }
    </div>
  );
}


export default memo(TodoItem);