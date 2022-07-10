import PropTypes from 'prop-types';
import css from "./Button.module.css";

function Button({ onLoadMore} ) {
    return (
        <button onClick={onLoadMore} className={css.button}>LoadMore</button>
    )
}

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired
}

export default Button;