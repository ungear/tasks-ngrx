import { Component, OnInit } from "@angular/core";
import { NamedTypeFilter } from "src/app/types/taskFilter";
import { Store } from "@ngrx/store";
import { AppState } from "../store/store";
import * as FilterActions from "../store/filter.action";

const NAMED_FILTERS: NamedTypeFilter[] = [
  {
    name: "23-inactive",
    filter: {
      taskName: "23",
      isActive: false
    }
  },
  {
    name: "1-active",
    filter: {
      taskName: "1",
      isActive: true
    }
  }
];

@Component({
  selector: "app-preset-filters",
  templateUrl: "./preset-filters.component.html",
  styleUrls: ["./preset-filters.component.scss"]
})
export class PresetFiltersComponent implements OnInit {
  namedFilters: NamedTypeFilter[] = NAMED_FILTERS;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onItemClick(f: NamedTypeFilter) {
    this.store.dispatch(new FilterActions.Apply(f.filter));
  }
}
