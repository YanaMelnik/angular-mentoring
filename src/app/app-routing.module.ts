import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PathNotFoundComponent } from './core/path-not-found/path-not-found.component';
import { LoginComponent } from './login/login.component';
import { IsNotAuthenticatedGuard } from './guards/isNotAuthenticatedGuard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotAuthenticatedGuard],
    data: {
      breadcrumb: 'Login'
    }
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
