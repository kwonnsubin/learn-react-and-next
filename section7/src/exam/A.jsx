import { useState } from 'react';

export default function A() {
  const [ count, setCount ] = useState(0);

  const handleClickDecrease = () => {
    setCount(count - 1);
  };

  const handleClickIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>{ count }</h4>
      <div>
        <button onClick={ handleClickDecrease }>-</button>
        <button onClick={ handleClickIncrease }>+</button>
      </div>
    </div>
  );
}