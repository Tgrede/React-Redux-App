import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/index'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import CountryList from './components/CountryList'
import styled from 'styled-components'

const store = createStore(reducer, applyMiddleware(thunk, logger))
function App() {
  return (
    <Provider store={store}>
      <StyledApp>
        <StyledHeader>Covid Tracker</StyledHeader>
        <CountryList />
      </StyledApp>
    </Provider>
  );
}

const StyledApp = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const StyledHeader = styled.h1`
  font-size: 3.5rem;
  text-shadow:1px 1px 1px black;
`

export default App;
