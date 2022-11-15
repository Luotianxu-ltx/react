// 引入react核心库
import React from 'react'
import { createRoot } from 'react-dom/client'
// 引入App组件
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App></App>
    </Provider>
)
