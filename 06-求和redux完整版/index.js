// 引入react核心库
import React from 'react'

import { createRoot } from 'react-dom/client'
// 引入App组件
import App from './App'
import store from './redux/store'

const root = createRoot(document.getElementById('root'))
root.render(<App></App>)

store.subscribe(() => {
    root.render(<App></App>)
})
