import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Navigation from './Navigation.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toPrint: 'default',
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
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <p>THis is some text: {this.state.toPrint}</p>
            </Col>
            <Col xs={12} md={6}>
              <p>THisis also text {this.state.toPrint}</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
