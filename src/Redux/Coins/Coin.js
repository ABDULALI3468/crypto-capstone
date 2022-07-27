// import { useParams } from "react-router-dom";
const FETCH_COIN = "FETCH_COIN";

export const coinFetchAction = (coin) => ({
  type: FETCH_COIN,
  coin,
});


// const params = useParams();
export const fetchCoin = (url) => {
  // Thunk Function
  return async (dispatch, getState) => {
    // Fetching results from an API : asynchronous action
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // Dispatching the action when async
    // action has completed.
    dispatch(coinFetchAction(data));
  };
};

const coin = (state = [], action) => {
  switch (action.type) {
    case FETCH_COIN:
      return action.coin;
    default:
      return state;
  }
};

export default coin;
