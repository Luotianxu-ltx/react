const LogFilter = (props) => {
    const changeHandler = (e) => {
        props.onYearChange(+e.target.value)
    }

    return (
        <div>
            年份：
            <select value={props.year} onChange={changeHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
            </select>
        </div>
    )
}

export default LogFilter
