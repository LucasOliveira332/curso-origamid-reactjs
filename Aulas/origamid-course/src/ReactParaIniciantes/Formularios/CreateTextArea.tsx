import React, { useState } from 'react';

const CreateTextArea = () => {
  const [textArea, setTextArea] = useState('');
  return (
    <div>
      <textarea
        name=""
        id=""
        rows={5}
        maxLength={200}
        onChange={({ target }) => {
          setTextArea(target.value);
        }}
      ></textarea>
      {textArea}
    </div>
  );
};

export default CreateTextArea;
