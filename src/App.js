import React, { useState } from 'react';

import { About, Header, Work, Skills, Testimonial, Footer } from './container';
import { Navbar, NavigationDots, SocialMedia } from './components';
import './App.scss';

const App = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  });

  // console.log(cursorX, cursorY);

  return (
    <div className="app">
      <Navbar />
      <NavigationDots />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <SocialMedia />
      <div className="copyright">
        <p className="p-text">@2020 WebWulfs</p>
        <p className="p-text">All rights reserved</p>
      </div>
      <div className="cursor-pointer" style={{ left: `${cursorX}px`, top: `${cursorY}px` }} />

    </div>
  );
};

export default App;
