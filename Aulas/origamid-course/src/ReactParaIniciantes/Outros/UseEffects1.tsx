import React, { useEffect } from 'react';

const Product = () => {
  function eventUse() {
    console.log('Scroll');
  }

  React.useEffect(() => {
    window.addEventListener('scroll', eventUse);
    return () => {
      removeEventListener('scroll', eventUse);
    };
  }, []);
  return (
    <div>
      <h1 style={{ height: '100vh' }}>Scroll</h1>
    </div>
  );
};

const UseEffects1 = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>
        {active ? 'Ativado' : 'Desativado'}
      </button>
      {active ? <Product /> : null}
    </div>
  );
};

export default UseEffects1;
