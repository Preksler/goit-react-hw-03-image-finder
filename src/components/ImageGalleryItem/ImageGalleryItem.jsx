import css from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image, thumbnail, tags }) {
    return (
        <li className={css.imageGalleryItem}>
            <img src={thumbnail} alt={tags} className={css.imageGalleryItem__image} />
        </li>
  )
}

export default ImageGalleryItem;