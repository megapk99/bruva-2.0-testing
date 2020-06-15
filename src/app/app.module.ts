import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthService} from './auth/services/auth/auth.service';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoritesComponent } from './products/components/favorites/favorites.component';
import { CheckoutComponent } from './products/components/checkout/checkout.component';






@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [
    AuthService
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    FavoritesComponent,
    CheckoutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
