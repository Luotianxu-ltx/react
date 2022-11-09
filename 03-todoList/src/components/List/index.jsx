import React, { Component } from 'react'
import ProTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    static propTypes = {
        todos: ProTypes.array.isRequired,
        updateTodo: ProTypes.func.isRequired,
    }
    render() {
        const { todos, updateTodo } = this.props
        return (
            <ul className='todo-main'>
                {todos.map((todo) => {
                    return (
                        <Item
                            key={todo.id}
                            {...todo}
                            updateTodo={updateTodo}
                        ></Item>
                    )
                })}
            </ul>
        )
    }
}
