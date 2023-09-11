import React from 'react';

import { About, Header, Work, Skills, Testimonial, Footer } from './container';
import { Navbar, NavigationDots, Pricing, SocialMedia } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <NavigationDots />
    <Header />
    <About />
    <Pricing />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
    <SocialMedia />
    <div className="copyright">
      <p className="p-text">&#169; One Web Solution</p>
      <p className="p-text">All rights reserved</p>
    </div>
  </div>
);

export default App;
