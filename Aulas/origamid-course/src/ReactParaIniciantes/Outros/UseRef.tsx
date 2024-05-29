import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState('');
  const inputButton = useRef();

  function handleClick() {
    setMessage([...message, input]);
    setInput('');
    inputButton.current.focus();
  }

  return (
    <div>
      <ul>
        {message.map((message) => (
          <p key={message}>{message}</p>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputButton}
        onChange={({ target }) => setInput(target.value)}
      />
      <br></br>
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default UseRef;
