import React, { useEffect, useState } from 'react';

export const GlobalContext = React.createContext('product');

export const StorageContext = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function cleanData() {
    setData(null);
  }

  return (
    <GlobalContext.Provider value={{ data, cleanData }}>
      {children}
    </GlobalContext.Provider>
  );
};
