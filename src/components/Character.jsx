import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pinkDressImg from '../assets/images/barbie.webp';
import blueDressImg from '../assets/images/barbieblue.jpg';
import casualOutfitImg from '../assets/images/casual-barbie.avif';
import defaultImg from '../assets/images/barbie.webp';
import './Character.css'; // Importăm fișierul CSS

const Character = ({ initialOutfit, initialAccessories }) => {
  const [outfit, setOutfit] = useState(initialOutfit);
  const [accessories, setAccessories] = useState(initialAccessories);

  const handleOutfitChange = (e) => {
    setOutfit(e.target.value);
  };

  const handleAccessoryChange = (index, value) => {
    const newAccessories = [...accessories];
    newAccessories[index] = value;
    setAccessories(newAccessories);
  };

  const outfitImages = {
    'Pink Dress': pinkDressImg,
    'Blue Dress': blueDressImg,
    'Casual Outfit': casualOutfitImg,
  };

  return (
    <div className="character-container">
      {/* h2 className="character-title">Barbie</h2>< */}
      <img
        src={outfitImages[outfit] || defaultImg}
        alt="Barbie"
        className="character-image"
      />
      <div className="character-controls">
        <label htmlFor="outfit" className="character-label">
          Outfit:
        </label>
        <select
          id="outfit"
          value={outfit}
          onChange={handleOutfitChange}
          className="character-select"
        >
          <option value="Pink Dress">Pink Dress</option>
          <option value="Blue Dress">Blue Dress</option>
          <option value="Casual Outfit">Casual Outfit</option>
        </select>
      </div>
      <div className="character-controls">
        <label className="character-label">Accessories:</label>
        {accessories.map((accessory, index) => (
          <input
            key={index}
            type="text"
            value={accessory}
            onChange={(e) => handleAccessoryChange(index, e.target.value)}
            className="character-input"
            placeholder={`Accessory ${index + 1}`}
          />
        ))}
      </div>
      <div className="character-summary">
        <p className="character-text">Selected Outfit: {outfit}</p>
        <p className="character-text">Accessories: {accessories.join(', ')}</p>
      </div>
    </div>
  );
};

Character.propTypes = {
  initialOutfit: PropTypes.string.isRequired,
  initialAccessories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Character;
