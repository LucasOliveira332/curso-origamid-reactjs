import React, { useEffect, useState } from 'react';

const UseEffect1 = () => {
  const [model, setModel] = useState(false);
  console.log(model);

  return (
    <div>
      {model && <Product />}
      <button onClick={() => setModel(!model)}>Ativar</button>
    </div>
  );
};

const Product = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      console.log(event);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <h2 style={{ height: '150vh' }}>Model</h2>;
};

export default UseEffect1;
