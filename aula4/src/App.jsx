import React from 'react';

const App = () => {
  const filmes = [
    { nome: 'Limitles', ano: 2011 },
    { nome: 'Fight Club', ano: 1999 },
    { nome: 'Gemini Man', ano: 2019 },
  ];

  return (
    <>
      <ul>
        {filmes
        .filter(({ ano }) => ano >= 2000)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
