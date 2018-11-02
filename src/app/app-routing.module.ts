import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  HomeComponent
} from './views/home/home.component';
import {
  LayoutAdminComponent
} from './layout/layout-admin/layout-admin.component';
import {
  LoginComponent
} from './views/login/login.component';
import {
  RegisterComponent
} from './views/register/register.component';

const routes: Routes = [{
    path: 'admin',
    component: LayoutAdminComponent,
    children: [{
      path: 'home',
      component: HomeComponent
    }]
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
