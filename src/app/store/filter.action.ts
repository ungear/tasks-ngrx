import { Action } from "@ngrx/store";
import { TaskFilter } from "src/app/types/taskFilter";

export enum FilterActionTypes {
  apply = "apply filter",
  reset = "reset filetr"
}

export class Apply implements Action {
  readonly type = FilterActionTypes.apply;
  constructor(public filter: TaskFilter) {}
}

export class Reset implements Action {
  readonly type = FilterActionTypes.reset;
}

export type FilterActionsUnion = Apply | Reset;
