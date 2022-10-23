import { Component, OnInit } from '@angular/core';
import { ColeccionService } from 'src/app/services/database/coleccion.service';
import { Coleccion } from '../../../interfaces/coleccion.interface';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-agregar-coleccion',
  templateUrl: './agregar-coleccion.component.html',
  styleUrls: ['./agregar-coleccion.component.css']
})
export class AgregarColeccionComponent implements OnInit {

  agregarColeccion: FormGroup;

  coleccion: Coleccion;

  usuario: Usuario;

  constructor(
    private coleccionService: ColeccionService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.agregarColeccion = this.formBuilder.group({
      txtNombre: [null, Validators.compose([Validators.required])],
      txtDescripcion: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    const local = localStorage.getItem('usuario');

    if (local !== null) {
      this.usuario = JSON.parse(local);
    }
  }

  guardar() {
    console.log(this.agregarColeccion.getRawValue());

    if (this.agregarColeccion.valid) {

      this.coleccion = {
        nombreColeccion: this.agregarColeccion.controls['txtNombre'].value,
        descripcion: this.agregarColeccion.controls['txtDescripcion'].value,
        estado: 'A',
        createdBy: this.usuario.idUsuario,
      }

      this.coleccionService.crearColeccion(this.coleccion).subscribe(
        (res: any) => {
          if (res.affectedRows > 0) {
            this.router.navigate(['/coleccion']);
          }
        }
      )

    }

  }

}
