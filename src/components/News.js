import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  articles = [];

  static defaultProps = {
    country: "us",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
    };
    document.title = `${this.capitalize(props.category)} - NewsMonkey`;
  }

  capitalize = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=72937702ba8042508c91a32ddb1d2ef7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: "35px" }}>
            News Monkey - Top {this.capitalize(this.props.category)} Headlines
          </h1>
          <div className="text-center">{this.state.loading && <Spinner />}</div>
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={
                        element.description
                          ? element.description.length >= 130
                            ? element.description.slice(0, 88) + "..."
                            : element.description
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source ? element.source : ""}
                    />
                  </div>
                );
              })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
              type="button"
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            <button
              disabled={
                Math.ceil(this.state.totalResults / this.props.pageSize) <=
                this.state.page
              }
              onClick={this.handleNextClick}
              type="button"
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
