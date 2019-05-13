import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import  Profile  from './Component/Profile'
import  Home  from './Component/Home'
import { Layout } from './Component/Layout'
import  Registration  from './Component/Registration'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<BrowserRouter>
  <Layout>
    <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/register" exact component = {Registration} />
        <Route path = "/profile" exact component = {Profile} />
    </Switch>
  </Layout>
</BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
