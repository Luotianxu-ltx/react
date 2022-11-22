/* 日志的容器 */
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = () => {
    const LogsData = [
        {
            date: new Date(2021, 1, 20, 18, 30),
            desc: '1',
            time: 30,
        },
        {
            date: new Date(2022, 1, 20, 18, 30),
            desc: '2',
            time: 20,
        },
        {
            date: new Date(2022, 3, 20, 18, 30),
            desc: '3',
            time: 20,
        },
    ]
    const logItemDate = LogsData.map((item, index) => (
        <LogItem {...item} key={index}></LogItem>
    ))
    return <div className='logs'>{logItemDate}</div>
}

export default Logs
