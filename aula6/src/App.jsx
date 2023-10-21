import React from 'react';

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

const App = () => {
  

  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert('Você clicou na toolbar!');
      }}
    >
      <Button onClick={() => alert('Reproduzindo!')}>Reproduzir Filme</Button>
      <Button onClick={() => alert('Enviando!')}>Enviar Imagem</Button>
    </div>
  );
};

export default App;
