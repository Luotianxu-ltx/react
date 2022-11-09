import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建并暴露app组件
export default class App extends React.Component {
    state = {
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: false,
            },
            {
                id: '002',
                name: '睡觉',
                done: true,
            },
            {
                id: '003',
                name: '打代码',
                done: false,
            },
        ],
    }

    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else {
                return todoObj
            }
        })
        this.setState({
            todos: newTodos,
        })
    }
    render() {
        const { todos } = this.state
        return (
            <div className='todo-container'>
                <div className='todo-wrap'>
                    <Header addTodo={this.addTodo}></Header>
                    <List todos={todos} updateTodo={this.updateTodo}></List>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}
