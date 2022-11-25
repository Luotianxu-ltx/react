import { useState } from 'react'
import Card from '../UI/Card/Card'
import LogItem from './LogItem/LogItem'
import LogFilter from './LogFilter/LogFilter'
import './Logs.css'

const Logs = (props) => {
    const [year, setYear] = useState(2022)

    const changeYearHandler = (year) => {
        setYear(year)
    }

    let filterData = props.LogsData.filter(
        (item) => item.date.getFullYear() === year
    )

    let logItemDate = filterData.map((item, index) => (
        <LogItem
            {...item}
            key={item.id}
            onDelLog={() => props.onDelLog(item.id)}
        ></LogItem>
    ))

    if (logItemDate.length === 0) {
        logItemDate = <p>没有找到日志！</p>
    }

    return (
        <Card className='logs'>
            <LogFilter year={year} onYearChange={changeYearHandler}></LogFilter>
            {logItemDate}
        </Card>
    )
}

export default Logs
