import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NstyleComponent } from './nstyle/nstyle.component';
import { NgmodelexpComponent } from './ngmodelexp/ngmodelexp.component';
import { NgcontentcComponent } from './ngcontentc/ngcontentc.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NstyleComponent,
    NgmodelexpComponent,
    NgcontentcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
