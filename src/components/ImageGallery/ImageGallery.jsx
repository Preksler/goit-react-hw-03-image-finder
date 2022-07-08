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

export default ImageGallery;