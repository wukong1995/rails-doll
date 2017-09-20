/* eslint no-console:0 */

import '../style/app.scss';
import deleteArticle from '../page/article';
import particles from '../page/session';

import { runPage } from '../util/tool';

export const application = () => {
  runPage('articles-index', deleteArticle);
  runPage(['sessions-index','sessions-new'], particles);
};
