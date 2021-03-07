import { Provider } from 'react-redux';
import './App.css';
import store from './state/store/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>CRUD Example</h1>
      </div>
    </Provider>
  );
}

export default App;
