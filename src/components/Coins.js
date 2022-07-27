import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../Redux/Coins/Coins";
import { Link } from "react-router-dom";
import Coin from "./Coin";
import "../styles/coins.css";
import mainImage from "../styles/crypto-main.png";

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
        <div>
          <img className="mainImage" src={mainImage} />
        </div>
        <h1 className="neon">Coins Overview</h1>
        <h1 className="neon">Coins Overview</h1>
        <h1 className="neon">Coins Overview</h1>
        <div className="coinsContainer">
          {coins.map((coin) => {
            return (
              <Link className="link" to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                <div className="coinContainer">
                  <div className="list">
                    <img className="coinImage" src={coin.image} alt="coinImage" />
                    <p className="coinId">{`${coin.symbol.charAt(0).toUpperCase() + coin.symbol.slice(1)}/USD`}</p>
                  </div>
                  <p className="currentPrice">AT: ${coin.current_price.toFixed(1)}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Coins;

// {
//     "id": "bitcoin",
//     "symbol": "btc",
//     "name": "Bitcoin",
//     "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//     "current_price": 22812,
//     "market_cap": 435759766618,
//     "market_cap_rank": 1,
//     "fully_diluted_valuation": 479055878836,
//     "total_volume": 39190406503,
//     "high_24h": 22813,
//     "low_24h": 22048,
//     "price_change_24h": 611.89,
//     "price_change_percentage_24h": 2.75623,
//     "market_cap_change_24h": 11687795171,
//     "market_cap_change_percentage_24h": 2.75609,
//     "circulating_supply": 19102062,
//     "total_supply": 21000000,
//     "max_supply": 21000000,
//     "ath": 69045,
//     "ath_change_percentage": -66.97312,
//     "ath_date": "2021-11-10T14:24:11.849Z",
//     "atl": 67.81,
//     "atl_change_percentage": 33528.7659,
//     "atl_date": "2013-07-06T00:00:00.000Z",
//     "roi": null,
//     "last_updated": "2022-07-24T15:49:35.677Z"
// }
