import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  filterContact,
} from './phonebook-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [removeContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload)
})

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer('', {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: () => 'Произошла ошибка к доступу данных!',
  [addContactError]: () => 'Произошла ошибка добавления контакта!',
  [removeContactError]: () => 'Произошла ошибка удаления контакта!',
});

export default combineReducers({
  items,
  filter,
  loading,
  error
});