import classes from './Meal.module.css'

const Meal = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img></img>
            </div>
            <div>
                <h2 className={classes.Title}>1</h2>
                <p className={classes.Desc}>2</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>12</span>
                    <div>数量</div>
                </div>
            </div>
        </div>
    )
}

export default Meal
