import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import configs from '../../../config';

function CadastroVideo() {
  const valoresIniciais = {
    titulo: 'Novo Vídeo',
    url: 'https://www.youtube.com/watch?v=C_vgdmHvpUc',
    descricao: 'Nova Descrição',
    categoriaId: '1',
  };

  const history = useHistory();

  const { values, onChangeHandler, clearForm } = useForm(valoresIniciais);

  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  async function postVideo(url = '', data = {}) {
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

  // obter as categorias
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
        Página de Cadastro de Vídeo
      </h1>

      <form onSubmit={function onSubmitHandler(eventHandler) {
        eventHandler.preventDefault();
        setVideos([
          ...videos,
          values,
        ]);

        const categoriaEscolhida = categorias.find((categoria) => {
          const categoriaId = parseInt(values.categoriaId, 10);
          return categoria.id === categoriaId;
        });

        postVideo(configs.URL_VIDEOS, {
          titulo: values.titulo,
          url: values.url,
          descricao: values.descricao,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          history.push('/');
        });

        clearForm();
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          type="input"
          value={values.titulo}
          onChange={onChangeHandler}
        />

        <FormField
          label="URL do Vídeo"
          type="input"
          name="url"
          value={values.url}
          onChange={onChangeHandler}
        />

        <FormField
          label="Descrição do vídeo"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={onChangeHandler}
        />

        <FormField
          label="Categoria"
          type="select"
          name="categoriaId"
          value={values.categoriaId}
          options={categorias}
          onChange={onChangeHandler}
        />

        <Button className="ButtonLink">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
