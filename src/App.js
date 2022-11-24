import React, { useState } from 'react'
import Logs from './components/Logs/Logs'
import LogsForm from './components/LogsForm/LogsForm'
import './App.css'

const App = () => {
    const [LogsData, setLogsData] = useState([
        {
            date: new Date(2021, 1, 20, 18, 30),
            desc: '1',
            time: 30,
            id: '1',
        },
        {
            date: new Date(2022, 1, 20, 18, 30),
            desc: '2',
            time: 20,
            id: '2',
        },
        {
            date: new Date(2022, 3, 20, 18, 30),
            desc: '3',
            time: 20,
            id: '3',
        },
    ])

    const saveLogHandler = (newLog) => {
        newLog.id = Date.now() + ''
        setLogsData([...LogsData, newLog])
    }

    const delLogByIndex = (index) => {
        setLogsData((preState) => {
            const newLogs = [...preState]
            newLogs.splice(index, 1)
            return newLogs
        })
    }
    return (
        <div className='app'>
            <LogsForm onSaveLog={saveLogHandler}></LogsForm>
            <Logs LogsData={LogsData} onDelLog={delLogByIndex}></Logs>
        </div>
    )
}

export default App
