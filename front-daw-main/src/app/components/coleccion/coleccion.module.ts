import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColeccionRoutingModule } from './coleccion-routing.module';
import { ListaColeccionesComponent } from './lista-colecciones/lista-colecciones.component';
import { ColeccionService } from '../../services/database/coleccion.service';
import { AgregarColeccionComponent } from './agregar-coleccion/agregar-coleccion.component';
import { EditarColeccionComponent } from './editar-coleccion/editar-coleccion.component';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { InputMaskModule } from 'primeng/inputmask';



@NgModule({
  declarations: [
    ListaColeccionesComponent,
    AgregarColeccionComponent,
    EditarColeccionComponent
  ],
  imports: [
    CommonModule,
    ColeccionRoutingModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ColeccionService]
})
export class ColeccionModule { }
