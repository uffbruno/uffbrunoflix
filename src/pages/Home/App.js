import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import Spinner from '../../components/Spinner';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasWithVideos) => {
        setDadosIniciais(categoriasWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      {dadosIniciais.length === 0 && (<Spinner>Loading...</Spinner>)}

      {dadosIniciais.length >= 1 && dadosIniciais[0].videos.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            videoDescription={dadosIniciais[0].videos[0].descricao}
            url={dadosIniciais[0].videos[0].url}
          />
        </>
      )}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <Carousel
              key={categoria.id}
              category={categoria}
              ignoreFirstVideo
            />
          );
        }
        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/* {dadosIniciais.length >= 1
        && (
          <>
            <BannerMain
              videoTitle={dadosIniciais[0].videos[0].titulo}
              url={dadosIniciais[0].videos[0].url}
              videoDescription={dadosIniciais[0].videos[0].descricao}
            />
          </>
        )} */}

      {/*
       <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={dadosIniciais.categorias[0].videos[0].descricao}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      /> */}

    </PageDefault>
  );
}

export default App;
