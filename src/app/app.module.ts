import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/partials/search/search.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FindalumniComponent } from './components/pages/findalumni/findalumni.component';
import { CareerComponent } from './components/pages/career/career.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    FindalumniComponent,
    CareerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
