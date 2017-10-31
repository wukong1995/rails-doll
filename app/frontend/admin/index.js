import './app.scss';

import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import article from './page/article';
import { runPage } from 'utils/tool';

const admin = () => {
  runPage('articles-index', article);
};

export default admin;
