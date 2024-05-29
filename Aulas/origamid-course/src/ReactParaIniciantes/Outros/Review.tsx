import React, { useEffect, useState } from 'react';

const Review = () => {
  const localStorageData = useLocalStorage('produto', 'smartphone');
  return (
    <div>
      <Product productData={localStorageData} />
      <button>smartphone</button>
      <button>table</button>
    </div>
  );
};

const Product = ({ productData }) => {
  const [data, setData] = useState(null);
  return (
    <div>
      {data && (
        <div>
          <h2>{data.nome}</h2>
          <h3>{data.preco}</h3>
        </div>
      )}
    </div>
  );
};

const useLocalStorage = (key, value) => {
  const [local, setLocal] = useState(() => {
    const storage = localStorage.getItem('key');
    return storage ? storage : value;
  });

  useEffect(() => {
    const storage = localStorage.setItem(key, value);
  }, [local]);

  return [setLocal];
};

export default Review;
