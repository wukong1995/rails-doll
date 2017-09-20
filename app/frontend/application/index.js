/* eslint no-console:0 */

import '../style/app.scss';
import deleteArticle from '../page/article';
import signin from '../page/session/signin';
import signup from '../page/session/signup';

import { runPage } from '../util/tool';

export const application = () => {
  runPage('articles-index', deleteArticle);
  runPage('sessions-index', signin);
  runPage('sessions-new', signup);
};
