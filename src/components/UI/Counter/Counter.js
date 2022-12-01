import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CarContext from '../../../store/cartContext'
import { useContext } from 'react'

const Counter = (props) => {
    const ctx = useContext(CarContext)
    const addButtonHandler = () => {
        ctx.cartDispatch({ type: 'ADD', meal: props.meal })
    }
    const subButtonHandler = () => {
        ctx.cartDispatch({ type: 'REMOVE', meal: props.meal })
    }
    return (
        <div className={classes.Counter}>
            {props.meal.amount && props.meal.amount !== 0 ? (
                <>
                    <button className={classes.Sub} onClick={subButtonHandler}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={classes.count}>{props.meal.amount}</span>
                </>
            ) : null}

            <button className={classes.Add} onClick={addButtonHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default Counter
