import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import './LogsForm.css'

const LogsForm = (props) => {
    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')

    const dateChangeHandler = (e) => {
        setInputDate(e.target.value)
    }
    const descChangeHandler = (e) => {
        setInputDesc(e.target.value)
    }
    const timeChangeHandler = (e) => {
        setInputTime(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault()
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime,
        }
        setInputDate('')
        setInputDesc('')
        setInputTime('')
        props.onSaveLog(newLog)
    }
    return (
        <Card className='logs-form'>
            <form onSubmit={formSubmitHandler}>
                <div className='form-item'>
                    <label htmlFor='date'>日期</label>
                    <input
                        id='date'
                        type='date'
                        value={inputDate}
                        onChange={dateChangeHandler}
                    ></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>内容</label>
                    <input
                        id='desc'
                        type='text'
                        value={inputDesc}
                        onChange={descChangeHandler}
                    ></input>
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>时长</label>
                    <input
                        id='time'
                        type='number'
                        value={inputTime}
                        onChange={timeChangeHandler}
                    ></input>
                </div>
                <div className='form-btn'>
                    <button>添加</button>
                </div>
            </form>
        </Card>
    )
}

export default LogsForm
