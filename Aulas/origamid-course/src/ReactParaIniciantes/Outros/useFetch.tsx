import React, { useEffect, useState } from 'react';

interface RequestOptions {
  url: string;
  headers: { [key: string]: string } | undefined;
}

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function request(request: RequestOptions) {
    let response;
    let json;
    try {
      if (error) {
        setError(null);
      }
      setloading(true);
      response = await fetch(request.url, request.headers);
      console.log('Estou fazendo uma request');

      json = await response.json();
    } catch {
      json = null;
      setError('Problema ao realizar o fetch');
    } finally {
      setloading(false);
      setData(json);
      return response;
    }
  }

  return { data, loading, error, request };
};

export default useFetch;
