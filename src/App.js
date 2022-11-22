import Logs from './components/Logs/Logs'
import LogsForm from './components/LogsForm/LogsForm'
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <LogsForm></LogsForm>
            <Logs></Logs>
        </div>
    )
}

export default App
