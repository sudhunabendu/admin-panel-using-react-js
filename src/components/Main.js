import React, { Component } from 'react';
import Content from './Content';
import Navbar from './Navbar';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
      <div className="main-panel">
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Main;