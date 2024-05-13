import React, { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleGift = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <img src="anniversary-image.jpg" alt="Anniversary" className="anniversary-image" />
      <button onClick={toggleGift} className="gift-button">Open Gift</button>
      {isVisible && (
        <div className="gift-content">
          <p>Happy Anniversary! Here's a special gift just for you!</p>
          {/* Add more content or images about the gift here */}
        </div>
      )}
    </div>
  );
}

export default App;
