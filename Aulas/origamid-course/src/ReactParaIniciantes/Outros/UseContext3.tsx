import React from 'react';

export const GlobalContext = React.createContext('global');

const user = {
  id: 1,
  nome: 'lucas',
};

export const GlobalStorage = ({ children }) => {
  return (
    <GlobalContext.Provider value={user}>{children}</GlobalContext.Provider>
  );
};
