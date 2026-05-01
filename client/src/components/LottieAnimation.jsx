import React from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({ animationData, width = 200, height = 200 }) => {
  return (
    <div style={{ width, height, margin: '0 auto' }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
