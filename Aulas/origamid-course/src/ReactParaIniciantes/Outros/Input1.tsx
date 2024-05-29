import React, { useState } from 'react';

const Input1 = () => {
  const [form, setForm] = useState({ nome: '', email: '' });

  function handleChange({ target }) {
    setForm({ ...form, [target.id]: target.value });
    console.log(form);
  }

  function submitForm(event) {
    console.log(event);
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <label htmlFor="nome">Nome </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <button>Enviar</button>
    </form>
  );
};

export default Input1;
