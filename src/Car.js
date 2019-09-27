import React from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

import { ReactComponent as CarIcon } from './images/fourWheelDrive.svg'

const Car = ({ styles, duration, animation }) => {

    const headerStyle = {
      ...(styles[animation]),
      animationDuration: `${duration}s`,
      margin: '30px auto',
      color: '#c43a31'
    };

    const carStyle = {
        height: '150px',
        width: '150px'
    }

    // Render a bunch of empty spans so that each keyframe
    // will be available in the DOM.
    let dummies = Object.keys(styles).map(
      key => <span key={key} style={styles[key]} />
    );
  
    return (
      <div style={carStyle}>
        {dummies}
        <div key={animation} style={headerStyle}>
            <CarIcon />
        </div>
      </div>
    );
  };
  
  Car.propTypes = {
    styles: PropTypes.object,
    duration: PropTypes.number,
    animation: PropTypes.string,
  };
  
  export default Radium(Car);