import React, { useState, useEffect} from 'react';

import { zoomInRight, zoomOutLeft } from 'react-animations';
import Radium from 'radium';

import { ReactComponent as CarIcon } from './images/fourWheelDrive.svg'

const styles  = {
  zoomInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomInRight, 'zoomInRight')
  },
  zoomOutLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomOutLeft, 'zoomOutLeft')
  },
  carStyle: {
    height: '150px',
    width: '150px'
  },
}

const Car = () => {

  const [carAnimation, setCarAnimation] = useState('zoomInRight');

  useEffect(() => {
    animateCar()  
  });

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  const animateCar = () => {
    sleep(1000).then(() => {
      if (carAnimation === 'zoomOutLeft') {
        setCarAnimation('zoomInRight')
      } else {
        setCarAnimation('zoomOutLeft')
      }
    })
  }

    // Render a bunch of empty spans so that each keyframe
    // will be available in the DOM.
    let dummies = Object.keys(styles).map(
      key => <span key={key} style={styles[key]} />
    );
  
    const currentCarAnimation = carAnimation === 'zoomInRight' ? styles.zoomInRight : styles.zoomOutLeft

    return (
      <div style={styles.carStyle}>
        {dummies}
        <div style={currentCarAnimation}>
            <CarIcon />
        </div>
      </div>
    );
  };
  
  export default Radium(Car);