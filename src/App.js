import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/ConfigureStore';
import Loader from './components/Loader';

import './styles/index.css';

const Coins = lazy(() => import('./components/Coins'));
const Navbar = lazy(() => import('./components/Navbar'));
import Coin from './components/Coin';
// const Coin = lazy(() => import('./components/Coin'));

const App = () => (
  <Provider store={store}>
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  </Provider>
);

export default App;
