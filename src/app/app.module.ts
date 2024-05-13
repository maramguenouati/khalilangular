import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';

import { ServiceComponent } from './service/service.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';

import { ExempleComponent } from './exemple/exemple.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
  
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    
    ServiceComponent,
  
    LoadingComponent,
    SidebarComponent,
    ProfileComponent,
    AccountComponent,
    WardrobeComponent,
   

   
        ExempleComponent,
       RegisterComponent,
     
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
