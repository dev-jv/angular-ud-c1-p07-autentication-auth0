import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from '@auth0/auth0-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricingComponent } from './components/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtectedComponent,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({ // [*] Implements Auth0
      domain: 'dev-jv-x.us.auth0.com',
      clientId: 'CmwtEl7so4jEPRmKPXxbTOyqIewTasxY'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
