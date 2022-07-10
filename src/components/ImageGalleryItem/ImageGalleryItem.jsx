import { Component } from "react";
import PropTypes from 'prop-types';
import Modal from "components/Modal/Modal";
import css from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    }

    toggleModal = () => {
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }));
    }

    render() {
        const { image, thumbnail, tags } = this.props;
        return (
            <>
                <li className={css.imageGalleryItem} onClick={this.toggleModal} >
                    <img
                        src={thumbnail}
                        alt={tags}
                        className={css.imageGalleryItem__image} />
                </li>
                {this.state.isModalOpen && <Modal
                    image={image}
                    tags={tags}
                    onClose={this.toggleModal} />}
            </>
        )
    }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired
}

export default ImageGalleryItem;