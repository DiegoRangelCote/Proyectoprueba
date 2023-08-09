import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CitasComponent } from './componentes/citas/citas.component';
import { ExamenesComponent } from './componentes/examenes/examenes.component';
import { AcompaComponent } from './componentes/acompa/acompa.component';
import { IngresarComponent } from './componentes/ingresar/ingresar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PacientesComponent } from './componentes/privado/pacientes/pacientes.component';
import { UsuariosComponent } from './componentes/privado/usuarios/usuarios.component';
import { ServiciosComponent } from './componentes/privado/servicios/servicios.component';
import { PermisosComponent } from './componentes/privado/permisos/permisos.component';
import { DocumentosComponent } from './componentes/privado/documentos/documentos.component';
import { DirectorioComponent } from './componentes/privado/directorio/directorio.component';
import { ActualizarCorreoElectronicoComponent } from './componentes/privado/actualizar-correo-electronico/actualizar-correo-electronico.component';
import { ActualizarClaveComponent } from './componentes/privado/actualizar-clave/actualizar-clave.component';
import { ActualizarDatosComponent } from './componentes/privado/actualizar-datos/actualizar-datos.component';
import { MenuPriAdComponent } from './componentes/menu-pri-ad/menu-pri-ad.component';


const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:"full"},
  {path:"registro",component:RegistroComponent,pathMatch:"full"},
  {path:"ingresar",component:IngresarComponent,pathMatch:"full"},
  {path:"acompa",component:AcompaComponent,pathMatch:"full"},
  {path:"examenes",component:ExamenesComponent,pathMatch:"full"},
  {path:"citas",component:CitasComponent,pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent,pathMatch:"full"},
  {path:"menu-pri-ad",component:MenuPriAdComponent,pathMatch:"full"},
  {path:"pacientes",component:PacientesComponent,pathMatch:"full"},
  {path:"servicios",component:ServiciosComponent,pathMatch:"full"},
  {path:"permisos",component:PermisosComponent,pathMatch:"full"},
  {path:"usuarios",component:UsuariosComponent,pathMatch:"full"},
  {path:"documentos",component:DocumentosComponent,pathMatch:"full"},
  {path:"directorio",component:DirectorioComponent,pathMatch:"full"},
  {path:"actualizarcorreoelectronico",component:ActualizarCorreoElectronicoComponent,pathMatch:"full"},
  {path:"actualizarclave",component:ActualizarClaveComponent,pathMatch:"full"},
  {path:"actualizardatos",component:ActualizarDatosComponent,pathMatch:"full"},
  {path:"**",component:HomeComponent,pathMatch:"full"},
  ];

//los que vamos a trabajar son el path "ingreso y el de permisos"


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
