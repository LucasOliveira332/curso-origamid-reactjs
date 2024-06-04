import React from 'react';
interface InputRadio {
  id: string;
  name: string;
  value: string;
  labelValue: string;
}

interface RadioProps {
  inputsRadio: InputRadio[];
  setInputRadio: (value: string) => void;
}

const Radio = ({ inputsRadio, setInputRadio }: RadioProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event) return;
    setInputRadio(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      {inputsRadio.map((inputRadio) => (
        <>
          <label htmlFor={inputRadio.id}>{inputRadio.labelValue}</label>
          <input
            type="radio"
            id={inputRadio.id}
            name={inputRadio.name}
            value={inputRadio.value}
            onChange={handleChange}
          />
        </>
      ))}
    </div>
  );
};

export default Radio;
