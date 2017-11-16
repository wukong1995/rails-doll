
import './style/app.scss';
import particles from './page/session';

import { runPage, updateRucaptcha } from 'utils/tool';

const application = () => {
  runPage(['sessions-index','sessions-new'], particles);
  runPage('sessions-new', updateRucaptcha);
};

export default application;
