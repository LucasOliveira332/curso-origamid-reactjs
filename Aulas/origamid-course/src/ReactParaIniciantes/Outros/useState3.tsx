import React from 'react';

const useState3 = () => {
  const [loading, setLoading] = React.useState(false);
  const [product, setProduct] = React.useState({});

  function handleClick({ target }: Event) {
    setLoading(true);
    if (loading) return null;

    fetch(`https://ranekapi.origamid.dev/json/api/produto/${target.innerText}`)
      .then((response) => response.json())
      .then((json) => {
        const product = json;
        console.log(product);
        setLoading(false);
        setProduct(product);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>notebook</button>

      {product.nome && loading === false && (
        <>
          <h2>Name: {product.nome}</h2>
          <h2>Price: {`R$ ${product.preco}`}</h2>
        </>
      )}

      {loading && <h2>Carregando...</h2>}
    </>
  );
};

export default useState3;
