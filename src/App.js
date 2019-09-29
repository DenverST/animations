import React from 'react';
import { StyleRoot } from 'radium';

import Car from './Car.js'
import Alien from './Alien.js'

const styles = {
  container: {
    height: '100vh',
  },
  animationContainer: {
    height: '95vh'
  }
}

function App() {

  return (
      <StyleRoot>
        <div style={styles.container}>
          <div style={styles.animationContainer}>
            <Alien />
          </div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a></div>
          <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
      </StyleRoot>
  );
}

export default App;
