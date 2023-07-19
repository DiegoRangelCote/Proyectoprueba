import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcompaComponent } from './componentes/acompa/acompa.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { ExamenesComponent } from './componentes/examenes/examenes.component';
import { HomeComponent } from './componentes/home/home.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuPriAdComponent } from './componentes/menu-pri-ad/menu-pri-ad.component';
import { MenuPriDesComponent } from './componentes/menu-pri-des/menu-pri-des.component';
import { MenuPriUsComponent } from './componentes/menu-pri-us/menu-pri-us.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';


@NgModule({
  declarations: [
    AppComponent,
    AcompaComponent,
    CarruselComponent,
    CitasComponent,
    ExamenesComponent,
    HomeComponent,
    IngresarComponent, 
    MenuComponent,
    MenuPriAdComponent,
    MenuPriDesComponent,
    MenuPriUsComponent,
    RegistroComponent,
    PiedepaginaComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
