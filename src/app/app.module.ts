import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FiltersComponent } from "./filters/filters.component";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./store/counter";
import { filterReducer } from "./store/filter.reducer";
import { TasksComponent } from "./tasks/tasks.component";
import { PresetFiltersComponent } from "./preset-filters/preset-filters.component";

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
    StoreModule.forRoot({ count: counterReducer, filter: filterReducer }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
