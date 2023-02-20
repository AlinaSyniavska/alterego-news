import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer, newsReducer} from "./slices";

const rootReducer = combineReducers({
    authReducer,
    newsReducer,
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppStore,
    AppDispatch,
}

export {
    setupStore
}