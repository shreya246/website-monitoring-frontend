import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:"dashboard",
    loadChildren: () =>
    import("../dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
  path:"",
  component:LoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
