import React from 'react';

const formLogin = () => {
  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="nome" name="nome" />
      <input type="email" id="email" name="email" />
      <button>Enviar</button>
    </form>
  );
};

export default formLogin;
