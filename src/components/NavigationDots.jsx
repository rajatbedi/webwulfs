/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const navigations = [
  'home',
  'about',
  'work',
  'skills',
  'testimonial',
  'contact',
];

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {navigations.map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={
          active === item ? { backgroundColor: '#313BAC' } : {}
        }
      />
    ))}
  </div>
);

export default NavigationDots;
