import React, { useEffect, useState, useRef } from 'react';
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
  const [showModal, setShowModal] = useState(false);

  const handleAreaClick = () => {
    setShowModal(true);
  };
  const modalRef = useRef(null);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef]);
  return (
    <div className="container"> 
    <div className="invisible-area" onClick={handleAreaClick}></div>
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
    {showModal && (
        <div className="modal" ref={modalRef}>
          <span className="close-button" onClick={handleCloseModal}>&times;</span>
          <img src="gift-card.png" alt="Happy Anniversary" className="gift-card" />
        </div>
      )}
    </div>
  );
}


export default App;
