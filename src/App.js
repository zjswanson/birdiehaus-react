import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation.js';
import Hero from './Hero.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPrint: 'default',
      heroText: "App Says Hero"
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    console.log(eventKey);
    this.setState({
      toPrint: eventKey
    });
  }

  render() {
    return (
      <div className="App">
        <Navigation handleSelect={this.handleSelect}></Navigation>
        <Hero heroText={this.state.heroText}></Hero>
        <Grid>
          <Row>
            <Col xs={12} md={9}>
              <h2>The place that makes the good stuff</h2>
              <p>THis is some text: {this.state.toPrint}</p>
            </Col>
            <Col xs={12} md={3}>
              <p>THisis also text {this.state.toPrint}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
