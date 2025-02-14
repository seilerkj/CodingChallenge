import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from "./containers/app";
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import configureStore from "./store/configStore";
import todoSvc from "./services/TodoService";

const initialState = {
    todos: todoSvc.initialize()
};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
