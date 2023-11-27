// TiltComponent.js
import React from 'react';
import Tilt from 'react-parallax-tilt';

const TiltComponent = ({ imageSrc, altText }) => {
  return (
    <Tilt 
      tiltEnable={true} 
      tiltMaxAngleX={20} 
      tiltMaxAngleY={20} 
      glareEnable={true} 
      glareMaxOpacity={0.5}
      glareColor="#ffffff"
      glareReverse={false}
      scale={1.05}
      perspective={1000}
      gyroscope={true}>
      <img src={imageSrc} alt={altText} className="project-image" />
    </Tilt>
  );
};

export default TiltComponent;
