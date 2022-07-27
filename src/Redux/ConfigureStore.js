/* eslint-disable no-unused-vars*/
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import coins from "./Coins/Coins";
import coin from "./Coins/Coin";

const store = configureStore(
  {
    reducer: {
      coins,
      coin,
    },
  },
  applyMiddleware(thunk)
);

export default store;
