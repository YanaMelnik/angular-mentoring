import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoursesListModule } from './courses-list/courses-list.module';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { IsAuthenticatedGuard } from './guards/isAuthenticatedGuard';
import { IsNotAuthenticatedGuard } from './guards/isNotAuthenticatedGuard';
import { DatePipe } from '@angular/common';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';

const APP_PROVIDERS = [
  IsAuthenticatedGuard,
  IsNotAuthenticatedGuard
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesListModule,
    AppRoutingModule,
    BreadcrumbsModule
  ],
  providers: [APP_PROVIDERS, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
