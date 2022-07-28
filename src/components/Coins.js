import { useEffect, React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCoins } from '../Redux/Coins/Coins';
import Coin from './Coin';
import '../styles/coins.css';
import mainImage from '../styles/mainimage.gif';

const Coins = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  }, [coins.length]);

  return (
    <>
      <div className="container">
        <div className="imageContainer">
          <img className="mainImage" src={mainImage} alt="Crypto graph" />
        </div>
        <h1 className="neon">Coins Overview</h1>
        <div className="coinsContainer">
          {coins.map((coin) => (
            <Link className="link" to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
              <div className="coinContainer">
                <div className="list">
                  <img className="coinImage" src={coin.image} alt="coinImage" />
                  <p className="coinId">{`${coin.symbol.charAt(0).toUpperCase() + coin.symbol.slice(1)}/USD`}</p>
                </div>
                <p className="currentPrice">
                  AT: $
                  {coin.current_price.toFixed(1)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Coins;
