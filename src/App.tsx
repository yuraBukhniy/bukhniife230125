import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import Users from './components/usersList/Users';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
