import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const [cursorX, setCursorX] = useState('0');
  const [cursorY, setCursorY] = useState('0');

  window.addEventListener('mousemove', (e) => {
    if (e.movementX > 0) {
      setCursorX('4px');
    } else if (e.movementX < 0) {
      setCursorX('-4px');
    }
    if (e.movementY > 0) {
      setCursorY('2px');
    } else if (e.movementY < 0) {
      setCursorY('-2px');
    }
  });

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <motion.div
            className="badge-cmp app__flex"
            whileHover={{ scale: [1, 1.1] }}
            transition={{ duration: 0.5 }}
            style={{ transform: `translate(${cursorX},${cursorY})` }}
          >
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, welcome to</p>
              <h1 className="head-text">WebWulfs</h1>
            </div>
          </motion.div>

          <motion.div
            className="tag-cmp app__flex"
            whileHover={{ scale: [1, 1.1] }}
            transition={{ duration: 0.5 }}
            style={{ transform: `translate(${cursorX},${cursorY})` }}
          >
            <p className="p-text">Web & Mobile Dev</p>
            <p className="p-text">Agency</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile1} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.next, images.graphql].map((circle, index) => (
          <motion.div
            className="circle-cmp app__flex"
            key={`circle-${index}`}
            whileHover={{ scale: [1, 1.1] }}
            transition={{ duration: 0.5 }}
            style={{ transform: `translate(${cursorX},${cursorY})`, transition: 'all 0.5s' }}
          >
            <img src={circle} alt="profile_bg" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
