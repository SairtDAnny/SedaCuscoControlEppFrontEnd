import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ColaboradorComponent } from './components/colaborador/colaborador.component';
import { PatrimonioComponent } from './components/patrimonio/patrimonio.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SalidaComponent } from './components/salida/salida.component';
import { ColaboradorFormComponent } from './components/colaborador-form/colaborador-form.component';
import { EntradaFormComponent } from './components/entrada-form/entrada-form.component';
import { PatrimonioFormComponent } from './components/patrimonio-form/patrimonio-form.component';
import { SalidaFormComponent } from './components/salida-form/salida-form.component';

import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColaboradorComponent,
    PatrimonioComponent,
    EntradaComponent,
    SalidaComponent,
    ColaboradorFormComponent,
    EntradaFormComponent,
    PatrimonioFormComponent,
    SalidaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
