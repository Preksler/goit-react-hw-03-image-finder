import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import getImagePixabay from "../services/pixabay";
import Container from "./Container/Container";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";

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

        if (searchImagesData.totalHits === 0) {
          this.setState({
            isLoading: false,
            error: new Error("No results were found for this query")
          });
          return;
        }

        this.setState((prevState) => ({
          images: [...prevState.images, ...searchImagesData.hits],
          isLoading: false,
          totalImages: searchImagesData.totalHits,
        }));
      } catch (error) {
        this.setState({
          error: new Error(`Something went wrong. ${error.message}`),
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
      images: [],
      error: null
    });
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
  }
  
  render() {
    const { images, isLoading, totalImages, error } = this.state;
    const imagesOnScreen = images.length;
    return (
      <>
        <Container>
          <Searchbar onSearch={this.handleFormSubmit} />
          {error && <h2 className="error">{error.message}</h2>}
          {imagesOnScreen > 0 && <ImageGallery images={images} />}
          {isLoading && <Loader />}
          {imagesOnScreen > 0 && imagesOnScreen < totalImages && <Button onLoadMore={this.loadMore} />}
        </Container>
      </>
    );
  }
}
