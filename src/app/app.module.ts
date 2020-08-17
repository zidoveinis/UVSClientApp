import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastService } from './services/forecast.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForecastComponent } from './components/forecast/forecast.component';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/lt';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ForecastBaseComponent } from './components/forecast/forecast-base.component';


registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    ForecastBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [ForecastService, { provide: LOCALE_ID, useValue: 'lt-LT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
