
import './style/app.scss';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import article from './page/article';
import { destroyAction } from './page/common';
import particles from './page/session';

import { runPage } from 'utils/tool';

export const application = () => {
  runPage('articles-index', article);
  runPage(['articles-index', 'articles-show'], destroyAction);
  runPage('articles-index', article);
  runPage(['sessions-index','sessions-new'], particles);
};
