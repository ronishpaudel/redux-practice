// src/redux/store.ts
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

interface User {
  id: number;
  name: string;
  loggedIn: boolean;
}

interface CounterState {
  count: number;
  users: User[];
}

const initialState: CounterState = {
  count: 0,
  users: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setUser: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const { increment, decrement, setUser, clearUsers } =
  counterSlice.actions;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
