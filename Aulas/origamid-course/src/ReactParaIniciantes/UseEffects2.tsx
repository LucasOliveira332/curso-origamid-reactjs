import React, { useEffect, useState } from 'react';
const URL = 'https://ranekapi.origamid.dev/json/api/produto/';

function getProductInLocalStorage() {
  const productName = localStorage.getItem('produto');
  if (productName) {
    return productName;
  }
}

const UseEffects2 = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productName = getProductInLocalStorage();
    if (productName) setProduct(productName);
  }, []);

  const handleClick = ({ target }) => {
    setProduct(target.innerText);
  };

  return (
    <div>
      <h2>
        Preferência: <span>{product}</span>
      </h2>
      {product && <Produto produto={product} />}
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

const Produto = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch(URL + produto)
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, [produto]);

  return (
    <div>
      {dados && (
        <div>
          <h2>{dados.nome}</h2>
          <p>{`Preço: ${dados.preco}`}</p>
        </div>
      )}
    </div>
  );
};

export default UseEffects2;
