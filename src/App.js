import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Login from './page/login/login'
import store from './store/configureStore'

export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
            <Login/>
            </Provider>
        );
    }
}