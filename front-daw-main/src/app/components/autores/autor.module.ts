import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AutorRoutingModule } from './autor-routing.module';
import { ListaAutoresComponent } from './lista-autores/lista-autores.component';
import { AutoresService } from '../../services/database/autores.service';
import { AgregarAutorComponent } from './agregar-autor/agregar-autor.component';
import { EditarAutorComponent } from './editar-autor/editar-autor.component';

import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { InputMaskModule } from 'primeng/inputmask';
// import { MessageService } from 'primeng/api';
import { DropdownModule } from "primeng/dropdown";

@NgModule({
  declarations: [
    ListaAutoresComponent,
    AgregarAutorComponent,
    EditarAutorComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DropdownModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AutoresService]
})
export class AutorModule { }
