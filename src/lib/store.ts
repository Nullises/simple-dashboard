import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { v4 as uuid } from "uuid";

const persistConfig = {
  id: uuid(),
  key: "root",
  storage,
};

// TO-DO: Sustituir el counterSlice por un rootReducer
const persistedReducer = persistReducer(persistConfig, counterSlice);

export function initializeStore(preloadedState?: any) {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState,
  });

  const persistor = persistStore(store);

  return { store, persistor };
}

export type AppStore = ReturnType<typeof initializeStore>["store"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
