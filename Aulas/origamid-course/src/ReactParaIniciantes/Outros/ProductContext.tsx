import React, { useState } from 'react';

export const ProductContext = React.createContext('product');

export const ProductStorage = ({ children }) => {
  const [product, setProduct] = useState(null);

  function cleanData() {
    setProduct(null);
  }

  return (
    <ProductContext.Provider value={{ product, setProduct, cleanData }}>
      {children}
    </ProductContext.Provider>
  );
};
