import { NgModule } from "@angular/core";
import { counterComponent } from "./Components/counter.component";

@NgModule( {
  declarations : [
    counterComponent
  ],
  exports : [
    counterComponent
  ]
})
export class CounterModule {}
