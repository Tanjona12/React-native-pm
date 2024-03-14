import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON } from './ActionTypes';

export const addPerson = (firstName, lastName, age) => ({
  type: ADD_PERSON,
  payload: { firstName, lastName, age },
});

export const deletePerson = (id) => ({
  type: DELETE_PERSON,
  payload: { id },
});

export const updatePerson = (id, firstName, lastName, age) => ({
  type: UPDATE_PERSON,
  payload: { id, firstName, lastName, age },
});