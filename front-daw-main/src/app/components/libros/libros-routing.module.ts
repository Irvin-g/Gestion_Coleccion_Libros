import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { LibrosDeseadosComponent } from './libros-deseados/libros-deseados.component';

const routes: Routes = [
  {
    path: "",
    component: ListaLibrosComponent,
  },
  {
    path: "libreria",
    component: LibreriaComponent,
  },
  {
    path: "librosdeseados",
    component: LibrosDeseadosComponent,
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
