
import './style/app.scss';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import article from './page/article';
import particles from './page/session';

import { runPage } from 'utils/tool';

const application = () => {
  runPage('articles-index', article);
  runPage(['sessions-index','sessions-new'], particles);
};

export default application;
