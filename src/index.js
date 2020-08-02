import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import App from './pages/Home/App';
import pagina404 from './pages/notfound';
import CadastroVideo from './pages/cadastro/video';

import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="/" component={App} exact />
      <Route component={pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);