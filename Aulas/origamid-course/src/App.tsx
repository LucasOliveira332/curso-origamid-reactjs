import { useState } from 'react';
import Radio from './ReactParaIniciantes/Formularios/Input2/Radio/Radio';

const App = () => {
  const [form, setInputRadio] = useState<string>();
  const inputsRadio = [
    {
      labelValue: 'Premium',
      id: 'premium',
      name: 'plan',
      value: 'premium',
    },
    {
      labelValue: 'Gold',
      id: 'gold',
      name: 'plan',
      value: 'gold',
    },
  ];

  return (
    <div>
      <Radio inputsRadio={inputsRadio} setInputRadio={setInputRadio} />
      <p>Plano Selecionado: {form}</p>
    </div>
  );
};

export default App;
