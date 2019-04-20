import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LayoutComponent } from './component/layout/layout.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { WeatherCardComponent } from './component/weather-card/weather-card.component';
import { TempretureComponent } from './component/weather-card/tempreture/tempreture.component';
import { HumidityComponent } from './component/weather-card/humidity/humidity.component';
import { PressureComponent } from './component/weather-card/pressure/pressure.component';
import { RainfallComponent } from './component/weather-card/rainfall/rainfall.component';
import { WindDirectionComponent } from './component/weather-card/wind-direction/wind-direction.component';
import { WindSpeedComponent } from './component/weather-card/wind-speed/wind-speed.component';
import { LastdataSetComponent } from './component/weather-card/lastdata-set/lastdata-set.component';
import { CardtemplateComponent } from './component/weather-card/cardtemplate/cardtemplate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    MainNavComponent,
    WeatherCardComponent,
    TempretureComponent,
    HumidityComponent,
    PressureComponent,
    RainfallComponent,
    WindDirectionComponent,
    WindSpeedComponent,
    LastdataSetComponent,
    CardtemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
