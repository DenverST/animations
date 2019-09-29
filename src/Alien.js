import React, { useState, useEffect} from 'react';

import { lightSpeedIn, lightSpeedOut } from 'react-animations';
import Radium from 'radium';

import { ReactComponent as AlienIcon } from './images/alien.svg';

const styles  = {
  lightSpeedOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(lightSpeedOut, 'lightSpeedOut')
  },
  lightSpeedIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(lightSpeedIn, 'lightSpeedIn')
  },
  alienStyle: {
    height: '150px',
    width: '150px'
  },
}

const Alien = () => {

  const [alienAnimation, setAlienAnimation] = useState('lightSpeedIn');

  useEffect(() => {
    animateAlien()  
  });

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const animateAlien = () => {
    sleep(1000).then(() => {
      if (alienAnimation === 'lightSpeedOut') {
        setAlienAnimation('lightSpeedIn')
      } else {
        setAlienAnimation('lightSpeedOut')
      }
    })
  }

    // Render a bunch of empty spans so that each keyframe
    // will be available in the DOM.
    let dummies = Object.keys(styles).map(
      key => <span key={key} style={styles[key]} />
    );
  
    const currentAlienAnimation = alienAnimation === 'lightSpeedIn' ? styles.lightSpeedIn : styles.lightSpeedOut

    return (
      <div style={styles.alienStyle}>
        {dummies}
        <div style={currentAlienAnimation}>
            <AlienIcon />
        </div>
      </div>
    );
  };
  
  export default Radium(Alien);