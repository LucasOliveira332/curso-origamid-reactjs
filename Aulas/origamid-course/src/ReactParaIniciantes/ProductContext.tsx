import React, { useState } from 'react';

export const ProductContext = React.createContext('product');
const [product, setProduct] = useState(null);

export const ProductStorage = ({ children }) => {
  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};
