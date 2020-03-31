import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { InterfaceComponent } from './interface/interface.component';
import { RouterModule, Routes } from '@angular/router';
import { CarLoginComponent } from './car-login/car-login.component';
import { MechanicLoginComponent } from './mechanic-login/mechanic-login.component';
import { VendorLoginComponent } from './vendor-login/vendor-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { ApplicationComponent } from './application/application.component';
import { MapComponent } from './map/map.component';
import { SparePartsComponent } from './spare-parts/spare-parts.component';
import { AppointmentComponent } from './appointment/appointment.component';
const appRoutes: Routes = [
  { path: 'home', component: InterfaceComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'carowner', component:CarLoginComponent},
  {path:'mechanic', component: MechanicLoginComponent},
  {path: 'vendor', component:VendorLoginComponent},
  {path:'user', component:UserComponent},
  {path: 'application', component:ApplicationComponent},
  {path:'map', component:MapComponent},
  {path:'spare', component:SparePartsComponent},
  {path:'appointment', component:AppointmentComponent}
]

@NgModule({
  declarations: [AppComponent, InterfaceComponent, AppointmentComponent, SparePartsComponent, 
    UserComponent,
    CarLoginComponent,  MechanicLoginComponent,
    VendorLoginComponent,
    ApplicationComponent, MapComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, ReactiveFormsModule, IonicModule.forRoot(), RouterModule.forRoot(appRoutes)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
