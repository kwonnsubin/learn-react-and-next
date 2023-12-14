// src > components > TodoList
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList({ todos, handleUpdateTodo }) {

  const [ search, setSearch ] = useState('');

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  // todos 배열을 필터링 하는 함수
  const filterTodos = () => {
    if (search === '') {
      return todos;
    }
    return todos.filter((todo) => (
      todo.content
        .toLowerCase()
        .includes(search.toLowerCase())
    ));
  };

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <input
        value={ search }
        onChange={ handleChangeSearch }
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        { filterTodos().map((todo) => (
          <TodoItem
            key={ todo.id }
            { ...todo }
            handleUpdateTodo={ handleUpdateTodo }
          />
        )) }
      </div>
    </div>
  );
}