import { FilterActionTypes, FilterActionsUnion } from "./filter.action";

export function filterReducer(state, action: FilterActionsUnion) {
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
