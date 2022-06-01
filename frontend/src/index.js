import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout';

import './css/index.scss';
import Intl from "./components/intl";

ReactDOM.render(

  <React.StrictMode>
    <Intl >
      <Layout />
    </Intl>
  </React.StrictMode>,

  document.getElementById('root')
);
