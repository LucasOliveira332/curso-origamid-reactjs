import React, { useEffect, useState } from 'react';

const ChangeTitleIfCountChange = () => {
  const [count, setCount] = useState(0);
  const title = 'Clicou ';
  useEffect(() => {
    document.title = title + count;
  }, [count]);
  // Adicionei o count como dependencia então sempre que mudar o count o useEffect e ativado, podendo adicionar quantas depenencias quiser, ou se quiser que execute apenas uma vez, não coloque nada

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </>
  );
};

export default ChangeTitleIfCountChange;
