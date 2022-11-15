import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}></Count>
            </div>
        )
    }
}
