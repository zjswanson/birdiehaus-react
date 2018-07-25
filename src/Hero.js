import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Hero.css';
import shopImage from './img/shop.jpg';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='hero-container'>
        <img src={shopImage} alt='hero image'/>
        <div class='screen'></div>
        <div class='hero-text-container'>
          <h1>birdiehaus</h1>
          <h2>Project Factory</h2>
        </div>
      </div>
    )
  }
}

export default Hero;
