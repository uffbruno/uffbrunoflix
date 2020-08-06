import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import Spinner from '../../../components/Spinner';
import Loading from '../../../assets/img/Loading.png';
import useForm from '../../../hooks/useForm';
import configs from '../../../config';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { values, onChangeHandler, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  async function postCategory(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });

    return response.json();
  }

  useEffect(() => {
    fetch(configs.URL_CATEGORY)
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
        {values.titulo}
      </h1>

      <form onSubmit={function onSubmitHandler(eventInfo) {
        eventInfo.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        postCategory(configs.URL_CATEGORY, values)
          .then((data) => (
            <div className="alert alert-primary" role="alert">
              Categoria
              {' '}
              {data.titulo}
              {' '}
              cadastrada com sucesso!
            </div>
          ));

        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria"
          name="titulo"
          type="input"
          value={values.titulo}
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
              <p />

              <Spinner>
                <img src={Loading} alt="Loading..." />
              </Spinner>
            </div>
          )}

        <ul>
          {categorias.map((categoria) => (
            <li key={`${categoria.id}`}>
              <font color={categoria.cor}>{categoria.titulo}</font>
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
