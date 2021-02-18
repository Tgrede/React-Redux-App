import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(thunk, logger))
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Covid Tracker</h1>
      </div>
    </Provider>
  );
}

export default App;
