import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti'
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
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
  
  const toggleGift = () => {
    setIsVisible(!isVisible);
  };
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
      <button onClick={toggleGift} className="gift-button">Open Gift</button>
      <Confetti
      width="393px"
      height="852px"
      numberOfPieces={100}
      gravity={0.03}
      initialVelocityY={20}
      opacity={50}
      // drawShape={ctx => {
      //   const shapeType = Math.random() > 0.5 ? 'heart' : 'petal';
      //   const scale = 0.2; // 缩小到原来的十分之一
      //   const x = 0;  // 画布中心位置的X坐标
      //   const y = 0;  // 画布中心位置的Y坐标
      //   ctx.lineWidth = 1;  // 设置线条宽度
    
      //   if (shapeType === 'heart') {
      //     drawHeart(ctx, x, y, scale);
      //   } else {
      //     drawPetal(ctx, x, y, scale);
      //   }
    
      //   ctx.stroke();
      //   ctx.closePath();
      // }}
      colors={colorPalette}
    />
      {isVisible && (
        <div className="gift-content">
          <p>Here's a special gift just for you!</p>
          
        </div>
      )}
    </div>
  );
}
function drawHeart(ctx, x, y, scale) {
  ctx.beginPath();
  ctx.moveTo(x + 75 * scale, y + 40 * scale);
  ctx.bezierCurveTo(x + 75 * scale, y + 37 * scale, x + 70 * scale, y + 25 * scale, x + 50 * scale, y + 25 * scale);
  ctx.bezierCurveTo(x + 20 * scale, y + 25 * scale, x + 20 * scale, y + 62.5 * scale, x + 20 * scale, y + 62.5 * scale);
  ctx.bezierCurveTo(x + 20 * scale, y + 80 * scale, x + 40 * scale, y + 102 * scale, x + 75 * scale, y + 120 * scale);
  ctx.bezierCurveTo(x + 110 * scale, y + 102 * scale, x + 130 * scale, y + 80 * scale, x + 130 * scale, y + 62.5 * scale);
  ctx.bezierCurveTo(x + 130 * scale, y + 62.5 * scale, x + 130 * scale, y + 25 * scale, x + 100 * scale, y + 25 * scale);
  ctx.bezierCurveTo(x + 85 * scale, y + 25 * scale, x + 75 * scale, y + 37 * scale, x + 75 * scale, y + 40 * scale);
  ctx.fill();
}

function drawPetal(ctx, x, y, scale) {
  ctx.beginPath();
  for (let i = 0; i < 4; i++) {
    ctx.ellipse(x + 75 * scale, y + 40 * scale, 20 * scale, 40 * scale, Math.PI / 4 + i * (Math.PI / 2), 0, 2 * Math.PI);
  }
  ctx.fill();
}


export default App;
