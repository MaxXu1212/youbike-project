
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/signin",
    pathMatch: "full", // 當路徑是空的時候轉址到 home
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'body',
    component:BodyComponent,
  },
  {
    path:'header/:change',
    component:BodyComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  // {
  //   path:'header',
  //   component:HeaderComponent
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
