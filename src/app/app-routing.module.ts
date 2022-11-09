import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProfileComponent } from './get-profile/get-profile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile-detail', component: ProfileComponent },
  {path: 'get-profile', component:GetProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
