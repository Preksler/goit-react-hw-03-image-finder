import { Component } from "react";
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
    static defaultProps = {
        onClose: null
    }

    componentDidMount() {
        window.addEventListener('keydown', this.onEscKeydown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscKeydown);
    }

    onEscKeydown = (event) => {
        if (event.key === 'Escape') {
            this.props.onClose();
        }
    }

    onOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    render() {
        const { image, tags } = this.props;
        return createPortal (
            <div className={css.overlay} onClick={this.onOverlayClick}>
                <div className={css.modal}>
                    <img src={image} alt={tags} />
                </div>
            </div>, modalRoot
        );
    }
}

Modal.propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;