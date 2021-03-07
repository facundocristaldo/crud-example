import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Enumeration from './screens/Enumeration';
import WWEnumerations from './screens/WWEnumerations';
import store from './state/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <WWEnumerations />
          </Route>
          <Route path="/group/:groupId">
            <Enumeration />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
