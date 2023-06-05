import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { NstyleComponent } from './nstyle/nstyle.component';
import { NgmodelexpComponent } from './ngmodelexp/ngmodelexp.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'nstyle',
    component: NstyleComponent
  },
  {
    path: 'ngmodelexp',
    component: NgmodelexpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
