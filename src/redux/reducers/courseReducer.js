import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      // DON'T DO THIS. This is mutating state:
      // state.push(action.course);
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
