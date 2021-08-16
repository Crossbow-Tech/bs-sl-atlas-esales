import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LaunchComponent } from '../launch/launch.component';
import { ContactComponent } from '../contact/contact.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children:
      [{ path: 'launch', component: LaunchComponent },
      { path: 'contact', component: ContactComponent }]
  },
  {path: '', redirectTo: '/home/launch', pathMatch: 'full'},
  {path: '**', redirectTo: '/home/launch', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
