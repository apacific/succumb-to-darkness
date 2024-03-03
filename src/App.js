import React from 'react';
import About from './components/about/About';
import Media from './components/media/Media';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="Header">
        <div id="banner" className="Banner">
          <h2 className="Band-name">succumb:</h2>
          <h2 className="Band-name">to:darkness</h2>
        </div>
      </header>
      <div className="Nav-container">
        <Nav />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="media-container">
        <div id="media">
          <Media />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
