import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from "primeng/dropdown";

import { LibrosRoutingModule } from './libros-routing.module';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { LibrosService } from '../../services/database/libros.service';

@NgModule({
  declarations: [
    ListaLibrosComponent,
    AgregarLibroComponent,
    EditarLibroComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class LibrosModule { }
