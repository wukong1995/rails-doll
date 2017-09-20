/* eslint no-console:0 */

import '../style/app.scss';
import deleteArticle from '../page/welcome';

import { runPage } from '../util/tool';

export const application = () => {
  runPage('articles-index', deleteArticle);
};
