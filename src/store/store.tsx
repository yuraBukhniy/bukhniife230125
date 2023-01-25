import { configureStore } from '@reduxjs/toolkit'
import initData from "./data/initData.json";
import reducer from './reducer';

const store = configureStore({
  preloadedState: initData,
  reducer
})

export default store;