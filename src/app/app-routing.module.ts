import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastBaseComponent } from './components/forecast/forecast-base.component';

const routes: Routes = [

  { path: '', redirectTo: '/forecast', pathMatch: 'full' },
  { path: 'forecast', component: ForecastBaseComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
