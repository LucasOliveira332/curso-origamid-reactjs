import React, { useEffect } from 'react';
import useFetch from './useFetch';
const URL: string = 'https://ranekapi.origamid.dev/json/api/produto/smartphone';

const CustomHooks2 = () => {
  const { data, loading, error, request } = useFetch();

  const requestProduct = { url: URL, headers: undefined };

  useEffect(() => {
    async function makeRequest() {
      const response = await request(requestProduct);
    }
    console.log('Estou fazendo uma request');

    makeRequest();
  }, []);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h2>{data.nome}</h2>
          <p>{data.preco}</p>
        </div>
      )}
    </div>
  );
};

export default CustomHooks2;
