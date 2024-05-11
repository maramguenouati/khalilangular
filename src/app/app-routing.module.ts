import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { LoadingComponent } from './loading/loading.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { WardrobeComponent } from './wardrobe/wardrobe.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  
  {path:"register",component:RegisterComponent},
  {path:"loading",component:LoadingComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"profil",component:ProfileComponent},
  {path:"account",component:AccountComponent},
  {path:"wardrobe",component:WardrobeComponent},
  {path:"calendar",component:CalendarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
