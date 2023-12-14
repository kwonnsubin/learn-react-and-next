// src > App.jsx

import { useState, useRef } from 'react';
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

function App() {

  const [ todos, setTodos ] = useState( mockData ); // useState( [mockData] ); X
  const idRef = useRef(3);

  const handleCreateTodo = (content) => {
    const newTodo = {
      id : idRef.current++,
      isDone : false,
      content,
      createdDate : new Date().getTime(),
    };

    setTodos(
      [ ...todos, newTodo ]
    );
  };

  const handleUpdateTodo = (targetId) => {
    setTodos(todos.map((todo)=>{
      todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo;
    }));
  };

  return (
    <div className='App'>
      <Header/>
      <TodoEditor handleCreateTodo={ handleCreateTodo }/>
      <TodoList todos={ todos } handleUpdateTodo={ handleUpdateTodo }/>
    </div>
  );
}

export default App;
