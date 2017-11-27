import './style/app.scss';

import { runPage, updateRucaptcha } from 'utils/tool';
import home from './page/home';

const application = () => {
  runPage('home-index', home);
  runPage('users-index', updateRucaptcha);
};

export default application;
