import React, { useEffect, useState } from 'react';

const customLocalStorage = (key: string, initial: string) => {
  const [value, setValue] = useState(() => {
    const local = localStorage.getItem(key);

    return local ? local : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
};

const CustomHooks1 = () => {
  const [product, setProduct] = customLocalStorage('produto', '');

  function handleClick({ target }: Event) {
    setProduct(target.innerText);
  }

  return (
    <div>
      <h2>{product}</h2>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
    </div>
  );
};

export default CustomHooks1;
