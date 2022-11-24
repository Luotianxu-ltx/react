/* 日志的容器 */
import Card from '../UI/Card/Card'
import LogItem from './LogItem/LogItem'
import './Logs.css'

const Logs = (props) => {
    let logItemDate = props.LogsData.map((item, index) => (
        <LogItem
            {...item}
            key={item.id}
            onDelLog={() => props.onDelLog(index)}
        ></LogItem>
    ))
    if (logItemDate.length === 0) {
        logItemDate = <p>没有找到日志！</p>
    }
    return <Card className='logs'>{logItemDate}</Card>
}

export default Logs
