import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-text">
        <h4>Modern Sofas</h4>
        <div>
          <h2>Experience life in extreme comfort</h2>
        </div>
        <div className="shop-now-btn" onClick={() => navigate('/products')}>
          <div>Shop now</div>
        </div>
      </div>
    </div>
  );
}
