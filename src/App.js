import React, { useEffect } from 'react';
import Confetti from 'react-confetti'
import './App.css';

function App() {
  const colorPalette = [
    '#f9eded', // 浅粉红
    '#f4c8c9', // 中等粉红
    '#ead1cc', // 柔和粉红
    '#ffe4e9', // 非常浅的粉红
    '#d3a5b3', // 深一点的粉红
    '#ffc1d6', // 明亮的粉红
    '#e2afb9', // 介于中深度的粉红
    '#f8d7e0'  // 非常柔和的粉红
  ];
  
  useEffect(() => {
    const floaters = document.querySelectorAll('.floater');

    floaters.forEach(floater => {
      // Randomize start positions and animation durations
      const xInitial = Math.random() * window.innerWidth;
      const yInitial = Math.random() * window.innerHeight;
      const duration = Math.random() * 5 + 5; // 5 to 10 seconds

      floater.style.left = `${xInitial}px`;
      floater.style.top = `${yInitial}px`;
      floater.style.animationDuration = `${duration}s`;

      // Randomize rotation direction
      if (Math.random() > 0.5) {
        floater.classList.add('rotate-clockwise');
      } else {
        floater.classList.add('rotate-counterclockwise');
      }
    });
  }, []);
  return (
    <div className="container"> 
      <img src="anniversary-img.png" alt="Happy Anniversary" className="anniversary-image" />
      <img src="anniversary-text.png" alt="Celebration Text" className="spinning-text" />
      <Confetti
      width="393px"
      height="852px"
      numberOfPieces={100}
      gravity={0.03}
      initialVelocityY={20}
      opacity={50}
      colors={colorPalette}
    />
    </div>
  );
}


export default App;
