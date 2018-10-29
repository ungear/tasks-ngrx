import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FiltersComponent } from "./filters/filters.component";

import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./store/counter";

@NgModule({
  declarations: [AppComponent, DashboardComponent, FiltersComponent],
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
