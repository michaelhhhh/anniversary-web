import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

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
      <div className="confetti">
        {/* 这里可以添加用CSS实现的礼花效果 */}
      </div>
      <img src="anniversary-img.png" alt="Happy Anniversary" className="anniversary-image" />
      <button onClick={toggleGift} className="gift-button">Open Gift</button>
      {isVisible && (
        <div className="gift-content">
          <p>Here's a special gift just for you!</p>
          {/* 更多礼物相关内容 */}
        </div>
      )}
    </div>
  );
}

export default App;
