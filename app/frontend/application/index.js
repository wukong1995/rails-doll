/* eslint no-console:0 */

import './style/app.scss';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';

import article from './page/article';
import particles from './page/session';

import { runPage } from 'utils/tool';

export const application = () => {
  runPage('articles-index', article);
  runPage(['sessions-index','sessions-new'], particles);
};
