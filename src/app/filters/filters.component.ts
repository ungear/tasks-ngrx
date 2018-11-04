import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as FilterActions from "../store/filter.action";
import { AppState } from "../store/store";
import { TaskFilter } from "src/app/types/taskFilter";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  filter: TaskFilter = {
    taskName: "",
    isActive: false
  };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onFilterFormSubmit() {
    this.store.dispatch(new FilterActions.Apply(this.filter));
  }

  onResetClick() {
    this.filter.taskName = "";
    this.filter.isActive = false;
    this.store.dispatch(new FilterActions.Reset());
  }
}
