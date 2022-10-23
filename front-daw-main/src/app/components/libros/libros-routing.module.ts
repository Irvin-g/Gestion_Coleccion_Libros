import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';

const routes: Routes = [
  {
    path: "",
    component: ListaLibrosComponent,
  },
  {
    path: "agregarLibro",
    component: AgregarLibroComponent,
  },
  {
    path: "editarLibro/:idLibro",
    component: EditarLibroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
