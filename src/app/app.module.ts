import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { VendeurModule } from './vendeur/vendeur.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    VendeurModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
