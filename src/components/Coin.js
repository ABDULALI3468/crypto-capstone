import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCoins } from "../Redux/Coins/Coins";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../styles/coin.css";
import DOMPurify from "dompurify";

const Coin = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins);

  const { id } = useParams();

  const index = coins.findIndex((item) => item.id === id);
  console.log(index);

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(fetchCoins());
    }
  }, []);

  return (
    <>
      <div>
        <div className="coin-container">
          <div className="content">
            <h1>{coins[index].name}</h1>
          </div>
          <div className="content">
            <div className="rank">
              <span className="rank-btn">Rank # {coins.market_cap_rank}</span>
            </div>
            <div className="info">
              <div className="coin-heading">
                <img src={coins.image} alt="" />
                <p>{coins[index].name}</p>
                <p>{coins[index].symbol.toUpperCase()}/USD</p>
              </div>
              <div className="coin-price">
                <h1>${coins[index].current_price.toLocaleString()}</h1>
              </div>
            </div>
          </div>

          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>1h</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>14d</th>
                  <th>30d</th>
                  <th>1yr</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{coins[index].market_data?.price_change_percentage_1h_in_currency ? <p>{coins[index].market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td>{coins[index].market_data?.price_change_percentage_24h_in_currency ? <p>{coins[index].market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td>{coins[index].market_data?.price_change_percentage_24h_in_currency ? <p>{coins[index].market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td>{coins[index].market_data?.price_change_percentage_24h_in_currency ? <p>{coins[index].market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td>{coins[index].market_data?.price_change_percentage_24h_in_currency ? <p>{coins[index].market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                  <td>{coins[index].market_data?.price_change_percentage_24h_in_currency ? <p>{coins[index].market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="content">
            <div className="stats">
              <div className="left">
                <div className="row">
                  <h4>24 Hour Low</h4>
                  {coins.market_data?.low_24h ? <p>${coins.market_data.low_24h.usd.toLocaleString()}</p> : null}
                </div>
                <div className="row">
                  <h4>24 Hour High</h4>
                  {coins.market_data?.high_24h ? <p>${coins.market_data.high_24h.usd.toLocaleString()}</p> : null}{" "}
                </div>
              </div>
              <div className="right">
                <div className="row">
                  <h4>Market Cap</h4>
                  {coins.market_data?.market_cap ? <p>${coins.market_data.market_cap.usd.toLocaleString()}</p> : null}
                </div>
                <div className="row">
                  <h4>Circulating Supply</h4>
                  {coins.market_data ? <p>{coins.market_data.circulating_supply}</p> : null}
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="about">
              <h3>About</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(coins.description ? coins.description.en : ""),
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coin;
