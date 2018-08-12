import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'movie-detail',
    loadChildren: 'app/movie-detail/movie-detail.module#MovieDetailModule'
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
