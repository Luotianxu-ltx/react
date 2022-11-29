import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'
import { useEffect, useState } from 'react'

const FilterMeals = (props) => {
    const [keyWord, setKeyWord] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onFilter(keyWord)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [keyWord])

    const inputChangeHandler = (e) => {
        setKeyWord(e.target.value.trim())
    }

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    value={keyWord}
                    onChange={inputChangeHandler}
                    className={classes.SearchInput}
                    type='text'
                    placeholder={'请输入关键字'}
                />
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch}
                />
            </div>
        </div>
    )
}

export default FilterMeals
