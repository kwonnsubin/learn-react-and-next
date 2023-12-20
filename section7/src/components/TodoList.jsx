// src > components > TodoList
import { useEffect, useState, useMemo, useContext } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { TodoStateContext } from '../TodoContext';

export default function TodoList() {
  // const { todos } = useContext(TodoStateContext); X
  const todos = useContext(TodoStateContext);

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

  // 전체 투두, 완료 투두, 미완 투두
  // const getAnalyzedTodoData = () => {
  //   console.log('TODO 분석 함수 호출');
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo)=>todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return {
  //     totalCount,
  //     doneCount,
  //     notDoneCount,
  //   };
  // };

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedTodoData(); // 구조분해 할당으로 받아오기

  const { totalCount, doneCount, notDoneCount } = useMemo(()=>{
    // 다시 수행시키고 싶지 않는 연산을 넣어준다.
    const totalCount = todos.length;
    const doneCount = todos.filter((todo)=>todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [ todos ]);

  return (
    <div className="TodoList">
      <h4>Todos</h4>
      <div>
        <div>전체 투두 : { totalCount }</div>
        <div>완료 투두 : { doneCount }</div>
        <div>미완 투두 : { notDoneCount }</div>
      </div>
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
          />
        )) }
      </div>
    </div>
  );
}