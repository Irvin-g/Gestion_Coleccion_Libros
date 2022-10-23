import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaColeccionesComponent } from './lista-colecciones/lista-colecciones.component';
import { AgregarColeccionComponent } from './agregar-coleccion/agregar-coleccion.component';
import { EditarColeccionComponent } from './editar-coleccion/editar-coleccion.component';

const routes: Routes = [
  {
    path: "",
    component: ListaColeccionesComponent,
  },
  {
    path: "agregarColeccion",
    component: AgregarColeccionComponent,
  },
  {
    path: "editarColeccion/:idColeccion",
    component: EditarColeccionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColeccionRoutingModule { }
