import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider}  from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import RootReducers from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(RootReducers,applyMiddleware(thunk));


ReactDOM.render(
<Provider store = {store}>
<App /> 
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
