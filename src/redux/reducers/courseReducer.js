export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      // DON'T DO THIS. This is mutating state:
      // state.push(action.course);
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
