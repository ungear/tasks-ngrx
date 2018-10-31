import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import * as FilterActions from "../store/filter.action";
import { AppState } from "../store/store";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  filter = {
    taskName: "",
    isActive: false
  };

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onFilterFormSubmit() {
    this.store.dispatch(new FilterActions.Apply(this.filter));
  }
}
