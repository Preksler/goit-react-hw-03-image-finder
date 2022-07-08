import css from "./Button.module.css";

function Button({ onLoadMore} ) {
    return (
        <button onClick={onLoadMore} className={css.button}>LoadMore</button>
    )
}

export default Button;