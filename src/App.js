import React from "react";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import Coin from "./components/Coin";
import store from "./Redux/ConfigureStore";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./styles/index.css";

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Coins />}></Route>
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </>
    </Provider>
  );
};

export default App;
