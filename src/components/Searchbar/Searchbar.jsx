import { Component } from 'react';
import PropTypes from 'prop-types';
import { CgSearch } from 'react-icons/cg'
import css from "./Searchbar.module.css";

class Searchbar extends Component {
    state = {
        search: ""
    }

    inputSearchValue = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onSearch(this.state.search);
    }

    render() {
        return (
            <header className={css.searchbar}>
                <form
                    className={css.searchForm}
                    onSubmit={this.formSubmit}>
                    <button type="submit" className={css.searchForm__button}>
                        <CgSearch size={24} />
                    </button>

                    <input
                        className={css.searchForm__input}
                        type="text"
                        name="search"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.inputSearchValue}
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default Searchbar;