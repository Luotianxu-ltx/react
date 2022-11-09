import React from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'

// 创建并暴露app组件
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}
