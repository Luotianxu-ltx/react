import React, { useState } from 'react'
import MyDate from './MyDate/MyDate'
import Card from '../../UI/Card/Card'
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal'
import './LogItem.css'

const LogItem = (props) => {
    const [showConfirm, setShowConfirm] = useState(false)

    const deleteHandler = () => {
        setShowConfirm(true)
    }

    const cancelHandler = () => {
        setShowConfirm(false)
    }

    const okHandler = () => {
        props.onDelLog()
        setShowConfirm(false)
    }

    return (
        <Card className='item'>
            {showConfirm && (
                <ConfirmModal
                    confirmText={'该操作不可恢复!请确认'}
                    onCancel={cancelHandler}
                    onOk={okHandler}
                ></ConfirmModal>
            )}
            <MyDate date={props.date} />
            {/* 日志内容的容器 */}
            <div className='content'>
                <h2 className='desc'>{props.desc}</h2>
                <div className='time'>{props.time}分钟</div>
            </div>
            <div>
                <div className='delete' onClick={deleteHandler}>
                    ×
                </div>
            </div>
        </Card>
    )
}

export default LogItem
