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

const appRoutes: Routes = [
  { path: 'home', component: InterfaceComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'carowner', component:CarLoginComponent},
  {path:'mechanic', component: MechanicLoginComponent},
  {path: 'vendor', component:VendorLoginComponent},
  {path:'user', component:UserComponent}
]

@NgModule({
  declarations: [AppComponent, InterfaceComponent, 
    UserComponent,
    CarLoginComponent,  MechanicLoginComponent,
    VendorLoginComponent
  ],
  entryComponents: [],
  imports: [BrowserModule,  ReactiveFormsModule, IonicModule.forRoot(), RouterModule.forRoot(appRoutes)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
