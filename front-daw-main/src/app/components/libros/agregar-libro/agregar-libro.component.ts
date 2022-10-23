import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/database/libros.service';
import { Libro } from '../../../interfaces/libro.interface';
import { Autor } from '../../../interfaces/autores.interface';
import { Coleccion } from '../../../interfaces/coleccion.interface';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { AutoresService } from 'src/app/services/database/autores.service';
import { ColeccionService } from 'src/app/services/database/coleccion.service';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.css']
})
export class AgregarLibroComponent implements OnInit {

  agregarLibro: FormGroup;

  libro: Libro;

  usuario: Usuario;

  itemsAutor: Autor[] = [];

  itemsColeccion: Coleccion[] = [];

  constructor(
    private librosService: LibrosService,
    private autoresService: AutoresService,
    private coleccionService: ColeccionService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.agregarLibro = this.formBuilder.group({
      txtNombreLibro: [null, Validators.compose([Validators.required])],
      txtDescripcion: [null, Validators.compose([Validators.required])],
      txtYearPublicacion: [null, Validators.compose([Validators.required])],
      txtNoPaginas: [null, Validators.compose([Validators.required])],
      txtPrecio: [null, Validators.compose([Validators.required])],
      cboIdAutor: [null, Validators.compose([Validators.required])],
      cboIdColeccion: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    const local = localStorage.getItem('usuario');

    if (local !== null) {
      this.usuario = JSON.parse(local);
    }

    this.listarAutores();
    this.listarColecciones();
  }

  listarAutores(): void {
    this.autoresService.obtenerAutores().subscribe(
      (data: any) => {
        this.itemsAutor = data;
        console.log("this.itemsAutor", this.itemsAutor);
      }
    );
  }

  listarColecciones(): void {
    this.coleccionService.obtenerColecciones().subscribe(
      (data: any) => {
        this.itemsColeccion = data;
        console.log("this.itemsColeccion", this.itemsColeccion);
      }
    );
  }

  guardar(): void {
    console.log(this.agregarLibro.getRawValue());
    if (this.agregarLibro.valid) {

      this.libro = {
        nombreLibro: this.agregarLibro.controls['txtNombreLibro'].value,
        descripcion: this.agregarLibro.controls['txtDescripcion'].value,
        yearPublicacion: this.agregarLibro.controls['txtYearPublicacion'].value,
        noPaginas: this.agregarLibro.controls['txtNoPaginas'].value,
        precio: this.agregarLibro.controls['txtPrecio'].value,
        idAutor: this.agregarLibro.controls['cboIdAutor'].value,
        idColeccion: this.agregarLibro.controls['cboIdColeccion'].value,
        estado: 'A',
        createdBy: this.usuario.idUsuario,
      }

      this.librosService.crearLibro(this.libro).subscribe(
        (res: any) => {
          if (res.affectedRows > 0) {
            this.router.navigate(['/libros']);
          }
        }
      )

    }
  }



}
