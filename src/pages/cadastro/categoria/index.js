import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);

  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function onChangeHandler(eventInfo) {
    setValue(eventInfo.target.getAttribute('name'),
      eventInfo.target.value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://uffbrunoflix.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>

      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function onSubmitHandler(eventInfo) {
        eventInfo.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={values.nome}
          onChange={onChangeHandler}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={onChangeHandler}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={onChangeHandler}
        />

        <Button className="ButtonLink">
          Cadastrar
        </Button>

        {categorias.length === 0
        && (
        <div>
          Loading...
        </div>
        )}

        <ul>
          {categorias.map((categoria, indice) => (
            <li key={`${categoria.nome}${indice}`}>
              <font color={categoria.cor}>{categoria.nome}</font>
            </li>
          ))}
        </ul>
      </form>

      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
