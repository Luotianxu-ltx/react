import ReactDOM from 'react-dom'
import './BackDrop.css'

const backDropRoot = document.getElementById('backdrop-root')
const BackDrop = (props) => {
    return ReactDOM.createPortal(
        <div className='backDrop'>{props.children}</div>,
        backDropRoot
    )
}

export default BackDrop
