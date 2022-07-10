import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import getImagePixabay from "../services/pixabay";
import Container from "./Container/Container";
import Button from "./Button/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner'

export class App extends Component {
  state = {
    search: "",
    page: 1,
    images: [],
    totalImages: 0,
    isLoading: false,
    error: null
  };

  async componentDidUpdate(_, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const searchImagesData = await getImagePixabay(search, page);
        this.setState((prevState) => ({
          images: [...prevState.images, ...searchImagesData.hits],
          isLoading: false,
          totalImages: searchImagesData.totalHits,
        }));
      } catch (error) {
        this.setState({
          error: new Error(`Something went wrong ${error}`),
          isLoading: false
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  
  handleFormSubmit = (searchText) => {
    this.setState({
      search: searchText.trim(),
      page: 1,
      images: []
    });
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  }
  
  render() {
    const { images, isLoading, totalImages } = this.state;
    const imagesOnScreen = images.length;
    return (
      <>
        <Container>
          <Searchbar onSearch={this.handleFormSubmit} />
          {isLoading && <ThreeDots color="#3f51b5" height={80} width={80} />}
          {imagesOnScreen > 0 && <ImageGallery images={images} />}
          {imagesOnScreen > 0 && imagesOnScreen < totalImages && <Button onLoadMore={this.loadMore} />}
        </Container>
      </>
    );
  }
}
