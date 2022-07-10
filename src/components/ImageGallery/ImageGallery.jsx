import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

function ImageGallery({ images }) {
    return (
        <ul className={css.imageGallery}>
            {images.map(({ id, largeImageURL, webformatURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    image={largeImageURL}
                    thumbnail={webformatURL}
                    tags={tags}
                />
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired
    }))
}

export default ImageGallery;