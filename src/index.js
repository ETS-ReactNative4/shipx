import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import 'semantic-ui-css/semantic.min.css';



const store = configureStore();

ReactDOM.render(
<Router>
    <Provider store={store}>
        <App />
    </Provider>
</Router>,
  document.getElementById('root')
);
