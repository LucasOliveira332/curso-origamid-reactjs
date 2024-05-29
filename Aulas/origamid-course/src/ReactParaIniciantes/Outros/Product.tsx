import React, { useEffect, useState } from 'react';
import { ProductContext, ProductStorage } from './ProductContext';
const URL = 'https://ranekapi.origamid.dev/json/api/produto/';

const Product = () => {
  return (
    <ProductStorage>
      <ProductInfo />
      <Button />
    </ProductStorage>
  );
};

const Button = () => {
  const productContext = React.useContext(ProductContext);
  return (
    <div>
      <button
        onClick={({ target }) => productContext.setProduct(target.innerText)}
      >
        smartphone
      </button>
      <button
        onClick={({ target }) => productContext.setProduct(target.innerText)}
      >
        tablet
      </button>
      <button onClick={() => productContext.cleanData()}>
        Limpar Carrinho
      </button>
    </div>
  );
};

const ProductInfo = () => {
  const [data, setData] = useState(null);
  const productContext = React.useContext(ProductContext);

  useEffect(() => {
    if (productContext.product) {
      fetch(URL + productContext.product)
        .then((response) => response.json())
        .then((json) => setData(json));
    } else {
      setData(null);
    }
  }, [productContext.product]);

  if (data) {
    return (
      <div>
        <h1>{data.nome}</h1>
        <p>{data.preco}</p>
        <p>{data.descricao}</p>
      </div>
    );
  }

  return null;
};

export default Product;
