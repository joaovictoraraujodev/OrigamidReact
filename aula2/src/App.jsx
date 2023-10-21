import React from 'react';

const App = () => {
  const estyleH1 = {
    color: 'grey',
    fontSize: '32px',
    fontFamily: 'Helvetica',
  };

  const estyleButton = {
    marginTop:'10px',
  };

  return (
    <>
      <h1 style={estyleH1}>Digite seu nome para se inscrever:</h1>
      <label htmlFor="nome"> Nome: </label>
      <input type="text" id="nome" />
      <button style={estyleButton}>
        <a
          className="ativo"
          href="https://music.amazon.com.br/"
          title="Este é o Amazon Music"
        >
          Amazon Music
        </a>
      </button>
    </>
  );
};

export default App;
