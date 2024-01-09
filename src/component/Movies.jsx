import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class Movie extends Component {
  render() {
    return (
      <Col>
        <Card style={{ width: "20rem" }}>
          <img src={this.props.film.Poster} alt={this.props.film.Title} whidth="100" key={this.props.film.imdbID} />
        </Card>
      </Col>
    );
  }
}

export default Movie;
