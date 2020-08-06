const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://uffbrunoflix.herokuapp.com';

const URL_VIDEOS = `${URL_BACKEND}/videos`;
const URL_CATEGORY = `${URL_BACKEND}/categorias`;


export default {
  URL_BACKEND,
  URL_VIDEOS,
  URL_CATEGORY,
};
