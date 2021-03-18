import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import authActions from './auth-actions';

const initialUserState = { name: null, email: null }

const user = createReducer(initialUserState, {
    [authActions.registerSuccess]: (_, { payload }) => payload.user,
    [authActions.loginSuccess]: (_, { payload }) => payload.user,
    [authActions.logOutSuccess]: () => initialUserState,
    [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [authActions.registerSuccess]: (_, { payload }) => payload.token,
    [authActions.loginSuccess]: (_, { payload }) => payload.token,
    [authActions.logOutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
    [authActions.registerError]: setError,
    [authActions.loginError]: setError,
    [authActions.logOutError]: setError,
    [authActions.getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
    [authActions.registerSuccess]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.getCurrentUserSuccess]: () => true,
    [authActions.registerError]: () => false,
    [authActions.loginError]: () => false,
    [authActions.getCurrentUserError]: () => false,
    [authActions.logOutSuccess]: () => false,
})

export default combineReducers({
    user,
    isAuthenticated,
    token,
    error,
});