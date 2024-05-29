import React, {
  ChangeEventHandler,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';

interface User {
  nome: string;
  email: string;
  senha: string;
  cep: string;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
}

interface FormInputs {
  id: string;
  label: string;
  type: string;
}

const formInputs: FormInputs[] = [
  { id: 'nome', label: 'Nome', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'senha', label: 'Senha', type: 'password' },
  { id: 'cep', label: 'Cep', type: 'text' },
  { id: 'rua', label: 'Rua', type: 'text' },
  { id: 'numero', label: 'Numero', type: 'number' },
  { id: 'bairro', label: 'Bairro', type: 'text' },
  { id: 'cidade', label: 'Cidade', type: 'text' },
  { id: 'estado', label: 'Estado', type: 'text' },
];

const defaultUser = {
  nome: '',
  email: '',
  senha: '',
  cep: '',
  rua: '',
  numero: 0,
  bairro: '',
  cidade: '',
  estado: '',
};
console.log(defaultUser);

const URL = 'https://ranekapi.origamid.dev/json/api/usuario';

const Form = () => {
  const [loading, setUserCreateDTO, response] = useCreateUser(URL);
  const [formData, setFormData] = useState<User>(defaultUser);
  function HandleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    setUserCreateDTO(formData);
    console.log(formData);
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setFormData({ ...formData, [target.id]: target.value });
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        {formInputs.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} onChange={handleChange} />
          </div>
        ))}
        <div>
          <span>{loading && 'Carregando...'}</span>
          <span>
            {response &&
              response.ok &&
              `Usuario Criado com sucesso! StatusCode: ${response.status}`}
          </span>
          <span>
            {response &&
              !response.ok &&
              `Erro na criação do usuario! StatusCode: ${response.status}`}
          </span>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

async function postRequest(url: string, bodyRequest: any) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyRequest),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

const useCreateUser = (url: string): [boolean, User, Response | undefined] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userCreateDTO, setUserCreateDTO] = useState<User>(defaultUser);
  const [response, setReponse] = useState<Response | undefined>(undefined);

  useEffect(() => {
    async function createUser() {
      console.log(userCreateDTO.email);
      if (!userCreateDTO.email) return;
      setLoading(true);
      const response = await postRequest(URL, userCreateDTO);
      setReponse(response);
      setLoading(false);
    }

    createUser();
  }, [userCreateDTO]);
  return [loading, setUserCreateDTO, response];
};

export default Form;
