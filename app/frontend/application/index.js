import './style/app.scss';

import { runPage, updateRucaptcha } from 'utils/tool';

const application = () => {
  runPage('users-index', updateRucaptcha);
};

export default application;
