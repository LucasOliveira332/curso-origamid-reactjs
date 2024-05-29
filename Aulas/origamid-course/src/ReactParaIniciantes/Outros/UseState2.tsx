import React from 'react';

const UseState2 = () => {
  const [count, setCount] = React.useState(1);
  const [item, setItem] = React.useState([`Item ${count}`]);

  function handleClick() {
    setCount(count + 1);
    setItem((item) => [...item, `item ${count}`]);
  }

  return (
    <>
      <button onClick={handleClick}>{count}</button>
      <button>{item}</button>
    </>
  );
};

export default UseState2;
