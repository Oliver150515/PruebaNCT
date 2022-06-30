import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-ruting.module';
import { HttpClientModule } from "@angular/common/http";



import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TrackingCuentasBancariasModule } from './tracking-cuentas-bancarias/tracking-cuentas-bancarias.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    TrackingCuentasBancariasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
