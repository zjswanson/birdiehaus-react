import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import logo from './logo.svg';
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
        <Navbar inverse collapseOnSelect onSelect={this.handleSelect}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
