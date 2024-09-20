import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { HomeComponent } from './home/home.component';
import { DetallestareasComponent } from './detallestareas/detallestareas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    HomeComponent,
    DetallestareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
