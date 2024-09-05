import { Link } from 'react-router-dom';
import './Home.css'; // Importăm fișierul CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Barbie Game!</h1>
      <Link to="/game">
        <button className="home-button">Start the Game</button>
      </Link>
    </div>
  );
};

export default Home;
