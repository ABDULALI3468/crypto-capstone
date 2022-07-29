import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../Redux/ConfigureStore';
import Coins from '../components/Coins';

test('Popular component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Coins />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
