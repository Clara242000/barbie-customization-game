
import Character from './Character';
import './Game.css'; // Importăm fișierul CSS

const Game = () => {
  const initialOutfit = 'Pink Dress';
  const initialAccessories = ['Necklace', 'Bracelet', 'Handbag'];

  return (
    <div className="game-container">
      <h1 className="game-title">Barbie Customization</h1>
      <Character initialOutfit={initialOutfit} initialAccessories={initialAccessories} />
    </div>
  );
};

export default Game;
