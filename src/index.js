import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';
import './App.css';

function Main(){
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Main />, document.getElementById("root"));
