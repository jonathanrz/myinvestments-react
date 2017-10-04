import ReactDOM from 'react-dom';
import './index.css';
import template from './template';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(template(), document.getElementById('root'));

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
