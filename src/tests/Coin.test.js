import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../Redux/ConfigureStore";
import Coin from "../components/Coin";

test("Popular component testing", () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Coin />
    </Provider>
  );
  expect(TREE).toMatchSnapshot();
});
