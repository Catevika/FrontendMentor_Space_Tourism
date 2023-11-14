import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { DestinationComponent } from './destination/destination.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'destinations', component: DestinationsComponent,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      { path: ':id', component: DestinationComponent }
    ]
  },
  { path: 'error', component: ErrorComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
