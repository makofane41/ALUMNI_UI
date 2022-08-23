import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './components/pages/career/career.component';
import { FindalumniComponent } from './components/pages/findalumni/findalumni.component';


const routes: Routes = [
{path:'',component:FindalumniComponent},
{path:'search/:searchTerm',component:FindalumniComponent},
{path:'career',component:CareerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
