import React, { useState, useEffect} from 'react';

import { bounce, zoomInRight, zoomOutLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import Car from './Car.js'
import { ReactComponent as Soccerball } from './images/soccerball.svg';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  zoomInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomInRight, 'zoomInRight')
  },
  zoomOutLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomOutLeft, 'zoomOutLeft')
  },
  container: {
    height: '100vh',
  },
  animationContainer: {
    height: '95vh'
  }
}

function App() {

  const [carAnimation, setCarAnimation] = useState('zoomInRight');

  useEffect(() => {
    animateCar()  
  });

  const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  // const animateCar = () => {
  //     sleep(1000).then(() => {
  //         setCarAnimation('zoomOutLeft')
  //         sleep(1000).then(() => {
  //           setCarAnimation('zoomInRight') 
  //           animateCar()
  //         })
  //       })
  // }

  const animateCar = () => {
    sleep(1000).then(() => {
      if (carAnimation === 'zoomOutLeft') {
        setCarAnimation('zoomInRight')
      } else {
        setCarAnimation('zoomOutLeft')
      }
    })
}

  return (
      <StyleRoot>
        <div style={styles.container}>
          <div style={styles.animationContainer}>
            <Car
              duration={1}
              animation={carAnimation}
              styles={styles}
            />
          </div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a></div>
        </div>
      </StyleRoot>
  );
}

export default App;
