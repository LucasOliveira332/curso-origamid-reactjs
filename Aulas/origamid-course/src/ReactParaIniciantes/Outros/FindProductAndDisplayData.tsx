import React, { useEffect, useState } from 'react';

const FindProductAndDisplayData = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setProduct(json));

    console.log(product);
  }, []);
  return (
    <>
      {product && (
        <div>
          <h1>{product.nome}</h1>
          <p>{product.preco * count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      )}
      <div>FindProductAnd DisplayData</div>
    </>
  );
};

export default FindProductAndDisplayData;
