import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PricingComponent} from './components/pricing/pricing.component';
import {ProtectedComponent} from './components/protected/protected.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] }, // [*] Implements AuthGuard
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

