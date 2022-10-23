import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { AgregarAutorComponent } from './agregar-autor/agregar-autor.component';
import { EditarAutorComponent } from './editar-autor/editar-autor.component';

const routes: Routes = [
  {
    path: "",
    component: ListaAutoresComponent,
  },
  {
    path: "agregarAutor",
    component: AgregarAutorComponent,
  },
  {
    path: "editarAutor/:idAutor",
    component: EditarAutorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorRoutingModule { }
