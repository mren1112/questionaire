import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { QaMainFrontendComponent } from './components/frontend/qa-frontend.component';

const routes: Routes = [
  { path: "home", component: QaMainFrontendComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        useHash: true,
        //  relativeLinkResolution: "legacy",
      }
      //,{ relativeLinkResolution: 'legacy' }
    ),],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },]
})
export class AppRoutingModule { }
