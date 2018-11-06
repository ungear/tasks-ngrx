import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FiltersComponent } from "./filters/filters.component";

import { StoreModule } from "@ngrx/store";
import { filterReducer } from "./store/filter.reducer";
import { TasksComponent } from "./tasks/tasks.component";
import { PresetFiltersComponent } from "./preset-filters/preset-filters.component";
import { AppState } from "./store/store";

const INITIAL_STATE: AppState = {
  filter: null
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FiltersComponent,
    TasksComponent,
    PresetFiltersComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { filter: filterReducer },
      { initialState: INITIAL_STATE }
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
