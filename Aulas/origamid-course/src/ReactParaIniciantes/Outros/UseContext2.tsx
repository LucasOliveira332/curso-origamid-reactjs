import React from 'react';
import { GlobalContext, GlobalStorage } from './UseContext3';

const UseContext2 = () => {
  return (
    <GlobalStorage>
      <div>Hello World</div>
      <Produto />
    </GlobalStorage>
  );
};

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      {`UserId: ${global.id}`}
      {`UserName: ${global.nome}`}
    </div>
  );
};

export default UseContext2;
