import {createSlice} from "@reduxjs/toolkit";

interface IState {
    isAuth: boolean,
}

const initialState: IState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuth = true;
        },
        resetAuth: state => {
            state.isAuth = false;
        }
    },
    extraReducers: {

    }
});

const {reducer: authReducer, actions: {resetAuth, setAuth}} = authSlice;

const authActions = {
    resetAuth,
    setAuth,
};

export {
    authReducer,
    authActions
}


