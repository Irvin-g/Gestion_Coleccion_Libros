import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppMainComponent } from './main/app.main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {//ruta de login
    path: 'login', component: LoginComponent,
  },
  { //componente main que tiene componente hijos
    path: '', component: AppMainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: "autores",
        loadChildren: () =>
          import("./components/autores/autor.module").then((m) => m.AutorModule),
      },
      {
        path: "coleccion",
        loadChildren: () =>
          import("./components/coleccion/coleccion.module").then((m) => m.ColeccionModule),
      },
      {
        path: "libros",
        loadChildren: () =>
          import("./components/libros/libros.module").then((m) => m.LibrosModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
