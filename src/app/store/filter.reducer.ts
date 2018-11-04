import { FilterActionTypes, FilterActionsUnion } from "./filter.action";

const initialState = null;

export function filterReducer(
  state = initialState,
  action: FilterActionsUnion
) {
  switch (action.type) {
    case FilterActionTypes.apply: {
      return Object.assign({}, action.filter);
    }

    case FilterActionTypes.reset: {
      return null;
    }

    default: {
      return state;
    }
  }
}
