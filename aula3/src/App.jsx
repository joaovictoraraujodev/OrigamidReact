import React from 'react';

const joao = {
  cliente: 'João',
  idade: 24,
  compras: [
    { nome: 'Computador', preco: '4500' },
    { nome: 'Iphone', preco: '1500' },
    { nome: 'Monitor', preco: '2000' },
  ],
  ativa: true,
};

const caroline = {
  cliente: 'Caroline',
  idade: 28,
  compras: [
    { nome: 'Sapatos', preco: '5000' },
    { nome: 'Bolsas', preco: '2000' },
    { nome: 'Iphone', preco: '7000' },
  ],
  ativa: false,
};

const App = () => {
  const dados = caroline;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito!</p>}
    </div>
  );
};

export default App;
