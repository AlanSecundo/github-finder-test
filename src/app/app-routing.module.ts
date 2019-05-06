import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRepositoriesComponent } from './list-repositories/list-repositories.component'
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:name', component: ListRepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
