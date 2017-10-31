
import './style/app.scss';
import particles from './page/session';

import { runPage } from 'utils/tool';

const application = () => {
  runPage(['sessions-index','sessions-new'], particles);
};

export default application;
