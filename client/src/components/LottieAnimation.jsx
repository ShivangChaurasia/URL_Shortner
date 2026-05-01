import React from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({ animationData, width = 200, height = 200 }) => {
  const LottieComponent = Lottie.default || Lottie;
  
  return (
    <div style={{ width, height, margin: '0 auto' }}>
      <LottieComponent animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
