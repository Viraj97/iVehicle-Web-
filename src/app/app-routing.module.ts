import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { HomeComponent } from './Pages/home/home.component';
import { ResultsComponent } from './Pages/results/results.component';
import { UserProfComponent } from './Pages/user-prof/user-prof.component';


const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'signin', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'userProf', component: UserProfComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
