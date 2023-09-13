import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
 import auth from "./auth";
import Cart from "./Cart";
import Favorit from "./Favorit";
// import Authorization from "./Authorization";
// import Cities from "./Cities";
// import localizationReducer from "./Localization";
// import PropertyType from "./PropertyType";
// import Favorite from "./Favorite";
// import MyAds from "./MyAds";
 
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const RootReducers = combineReducers({
  auth:auth,
  cart:Cart,
  favorit:Favorit
//   properties:properties,
//   user:Authorization,
//   cities:Cities,
//   currentLocal: localizationReducer,
//   propertiesType: PropertyType,
//   favoriteProperty:Favorite,
//   myProperties:MyAds
});

const persistedReducer = persistReducer(persistConfig, RootReducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
