import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);*/

registerServiceWorker();
