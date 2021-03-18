import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('contacts/registerRequest');
const registerSuccess = createAction('contacts/registerSuccess');
const registerError = createAction('contacts/registerError');

const loginRequest = createAction('contacts/loginRequest');
const loginSuccess = createAction('contacts/loginSuccess');
const loginError = createAction('contacts/loginError');

const logOutRequest = createAction('contacts/logOutRequest');
const logOutSuccess = createAction('contacts/logOutSuccess');
const logOutError = createAction('contacts/logOutError');

const getCurrentUserRequest = createAction('contacts/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('contacts/getCurrentUserSuccess');
const getCurrentUserError = createAction('contacts/getCurrentUserError');

const operations = {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logOutRequest,
    logOutSuccess,
    logOutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
}

export default operations;