import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RepositoryService } from "./repository.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
