import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { UserEntityComponent } from './header/user-entity/user-entity.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, LogoComponent, UserEntityComponent, BreadcrumbsComponent],
  exports: [HeaderComponent, FooterComponent, LogoComponent, UserEntityComponent, BreadcrumbsComponent]
})
export class CoreModule { }
