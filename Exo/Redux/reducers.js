import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON } from './ActionTypes';

const initialState = {
  people: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return {
        ...state,
        people: [...state.people, { id: Date.now(), ...action.payload }],
      };
    case DELETE_PERSON:
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload.id),
      };
    case UPDATE_PERSON:
      return {
        ...state,
        people: state.people.map((person) =>
          person.id === action.payload.id ? { ...person, ...action.payload } : person
        ),
      };
    default:
      return state;
  }
};

export default reducer;