import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      searchTerm: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchTerm);
    fetch(URL.concat(this.state.searchTerm))
      .then((response) => response.json())
      .then((data) => this.setState({ reviews: data.results }));
  };
  render() {
    return (
      <div>
        SearchableMovieReviewsContainer
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="search"
            value={this.state.searchTerm}
          />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
