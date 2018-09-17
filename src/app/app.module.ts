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
import { LoginModule } from './login/login.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthorizationInterceptor } from './common/http/authorization.interceptor';
import { LoadingBlockComponent } from './common/loading-block/loading-block.component';
import { OverlayInterceptor } from './common/loading-block/overlay.interceptor';

const APP_PROVIDERS = [
  IsAuthenticatedGuard,
  IsNotAuthenticatedGuard
];

@NgModule({
  declarations: [
    AppComponent,
    LoadingBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    LoginModule,
    CoursesListModule,
    AppRoutingModule
  ],
  providers: [
    APP_PROVIDERS,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OverlayInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
