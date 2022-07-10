import { createPortal } from 'react-dom';
import { ThreeDots } from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import css from "./Loader.module.css";

const loaderRoot = document.querySelector("#loader-root");

const Loader = () => {
    return createPortal(
        <div className={css.overlay}>
            <ThreeDots color="#3f51b5" height={80} width={80} />
        </div>, loaderRoot
    );
}

export default Loader;