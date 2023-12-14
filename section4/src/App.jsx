// src > App.jsx

import { useState, useEffect } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';
import useUpdate from './hooks/useUpdate';
import useInput from './hooks/useInput';

function App() {
  const [ count, setCount ] = useState(0);
  // const [ text, setText ] = useState('');
  const [ text, handleChangeText ] = useInput();

  useUpdate(()=>{
    console.log('APP 컴포넌트 업데이트');
  });

  useEffect(()=>{
    console.log('마운트');
  },[]);

  const handleChangeCount= (value) => {
    setCount(count + value);
  };

  // const handleChangeText = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <>
      <div className='App'>
        <h1>Simple Counter</h1>
        <section>
          <input value={ text } onChange={ handleChangeText }/>
        </section>
        <section>
          <Viewer count={ count }/>
          { count % 2 === 0 && <Even/> }
        </section>
        <section>
          <Controller handleChangeCount={ handleChangeCount }/>
        </section>
      </div>
    </>
  );
}

export default App;
