import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { UserEntityComponent } from './header/user-entity/user-entity.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    UserEntityComponent,
    BreadcrumbsComponent,
    LoginComponent,
    PathNotFoundComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    UserEntityComponent,
    BreadcrumbsComponent,
    LoginComponent
  ]
})
export class CoreModule { }
