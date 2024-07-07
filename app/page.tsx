"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SetCounter } from "./src/component/page";
import store, { persistor } from "./src/redux/store";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SetCounter />
    </PersistGate>
  </Provider>
);

export default App;
