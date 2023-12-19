// src > App.jsx

import { useState, useRef, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mockData = [
  {
    id : 0,
    isDone : true,
    content : 'React 공부하기',
    createdDate : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : '빨래 널기',
    createdDate : new Date().getTime(),
  },
  {
    id : 2,
    isDone : true,
    content : '음악 연습하기',
    createdDate : new Date().getTime(),
  }
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE': {
      return [ ...state, action.data ];
    }
    case 'UPDATE': {
      return state.map((it) =>
        it.id === action.data
          ? { ...it, isDone: !it.isDone }
          : it
      );
    }
    case 'DELETE': {
      return state.filter((it) => it.id !== action.data);
    }
  }
}

function App() {

  // const [ todos, setTodos ] = useState( mockData ); // useState( [mockData] ); X
  const [ todos, dispatch ] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const handleCreateTodo = (content) => {
    // const newTodo = {
    //   id : idRef.current++,
    //   isDone : false,
    //   content,
    //   createdDate : new Date().getTime(),
    // };

    // setTodos(
    //   [ ...todos, newTodo ]
    // );

    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content,
        createdDate: new Date().getTime(),
      },
    });
  };

  const handleUpdateTodo = (targetId) => {
    // setTodos(todos.map((todo)=>{
    //   todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo;
    // })); 오류 수정

    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId
    //       ? { ...todo, isDone: !todo.isDone }
    //       : todo
    //   )
    // );

    dispatch({
      type: 'UPDATE',
      data: targetId,
    });
  };

  const handleDeleteTodo = (targetId) => {
    // setTodos(
    //   todos.filter((todo)=>todo.id !== targetId)
    // );

    dispatch({
      type: 'DELETE',
      data: targetId,
    });
  };

  return (
    <div className='App'>
      <Header/>
      <TodoEditor handleCreateTodo={ handleCreateTodo }/>
      <TodoList todos={ todos } handleUpdateTodo={ handleUpdateTodo } handleDeleteTodo={ handleDeleteTodo }/>
    </div>
  );
}

export default App;
