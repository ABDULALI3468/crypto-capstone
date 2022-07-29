const FETCH_COINS = 'FETCH_COINS';

export const coinsFetchAction = (coins) => ({
  type: FETCH_COINS,
  coins,
});

export const fetchCoins = () => async (dispatch) => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false');
  const data = await response.json();
  dispatch(coinsFetchAction(data));
};

const coins = (state = [], action) => {
  switch (action.type) {
    case FETCH_COINS:
      return action.coins;
    default:
      return state;
  }
};

export default coins;
