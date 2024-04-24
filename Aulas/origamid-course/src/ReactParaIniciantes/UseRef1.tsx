import React, { useEffect, useRef, useState } from 'react';

const UseRef1 = () => {
  const [carrinho, setCarrinho] = useState(0);
  const timeOutId = useRef();
  const [notification, setNotification] = useState(null);

  function handleClick() {
    setNotification('Item Adicionado');

    clearTimeout(timeOutId.current);
    timeOutId.current = setTimeout(() => {
      setNotification(null);
    }, 1000);
  }

  return (
    <div>
      {notification && notification}
      <button onClick={handleClick}>Carrinho {carrinho}</button>
    </div>
  );
};

export default UseRef1;
