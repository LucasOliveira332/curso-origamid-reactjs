import React from 'react'

export const DesafioComponentes = () => {
  const produtos = [
    {nome: 'Notebook', propriedades: ['16gb ram', '512gb']},
    {nome: 'Smartphone', propriedades: ['2gb ram', '128gb']}
  ]
  return (
    <>
    {produtos.map((product, index) => {
      return <Product key={index} productName={product.nome} especifications={product.propriedades}/>
    })}
    </>
  )
}

const Product = ({productName, especifications} : {productName: string, especifications: string[]}) => {
  return (
    <>
      <h2>{productName}</h2>
      <ul>
        {especifications.map((especification, index) => (<li key={index}>{especification}</li>))}
      </ul>
    </>
  )
}