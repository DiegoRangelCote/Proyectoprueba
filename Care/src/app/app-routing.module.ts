import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { ExamenesComponent } from './componentes/examenes/examenes.component';
import { AcompaComponent } from './componentes/acompa/acompa.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"registro",component:RegistroComponent,pathMatch:"full"},
  {path:"ingresar",component:IngresarComponent,pathMatch:"full"},
  {path:"acompa",component:AcompaComponent,pathMatch:"full"},
  {path:"examenes",component:ExamenesComponent,pathMatch:"full"},
  {path:"citas",component:CitasComponent,pathMatch:"full"},
  {path:"**",component:HomeComponent,pathMatch:"full"},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
