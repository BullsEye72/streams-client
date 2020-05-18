import { FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, DELETE_STREAM, EDIT_STREAM } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ...action.payload.reduce((map, payload) => ((map[payload.id] = payload), map), {}) };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      let newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
};
