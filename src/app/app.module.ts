import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MaterialsPrimeModule } from './materials/materialsprime.module';
import { QaFrontendModule } from './components/frontend/qa-frontend.module';
import { HttpErrorInterceptor } from './services/db/http-errors/http-error.interceptor';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { ApiImplementsFunctionCheckService } from './functions/implement-function';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [

    QaFrontendModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialsModule,
    MaterialsPrimeModule,
    ReactiveFormsModule,
    FormsModule,
   // BackButtonDisableModule.forRoot({ preserveScroll: true }),
  ],
  exports: [RouterModule],
  //entryComponents:[MatDialogModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "th-TH" },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  },
  ApiImplementsFunctionCheckService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
