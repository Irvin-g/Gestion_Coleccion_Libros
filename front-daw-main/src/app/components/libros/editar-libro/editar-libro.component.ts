import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/database/libros.service';
import { Libro } from '../../../interfaces/libro.interface';
import { Autor } from '../../../interfaces/autores.interface';
import { Coleccion } from '../../../interfaces/coleccion.interface';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { AutoresService } from 'src/app/services/database/autores.service';
import { ColeccionService } from 'src/app/services/database/coleccion.service';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.css']
})
export class EditarLibroComponent implements OnInit {

  editarLibro: FormGroup;

  libro: Libro;

  usuario: Usuario;

  itemsAutor: Autor[] = [];

  itemsColeccion: Coleccion[] = [];

  idLibro: string;

  constructor(
    private librosService: LibrosService,
    private autoresService: AutoresService,
    private coleccionService: ColeccionService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.idLibro = this.route.snapshot.params['idLibro'];

    this.editarLibro = this.formBuilder.group({
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
    this.obtenerLibroPorId();
    this.listarAutores();
    this.listarColecciones();
  }

  obtenerLibroPorId() {

    this.librosService.obtenerLibroPorId(this.idLibro).subscribe(
      (data: any) => {
        this.libro = data[0];

        console.log("this.libro", this.libro);

        if (this.libro) {
          this.editarLibro.controls['txtNombreLibro'].setValue(this.libro.nombreLibro);
          this.editarLibro.controls['txtDescripcion'].setValue(this.libro.descripcion);
          this.editarLibro.controls['txtYearPublicacion'].setValue(this.libro.yearPublicacion);
          this.editarLibro.controls['txtNoPaginas'].setValue(this.libro.noPaginas);
          this.editarLibro.controls['txtPrecio'].setValue(this.libro.precio);
          this.editarLibro.controls['cboIdAutor'].setValue(this.libro.idAutor);
          this.editarLibro.controls['cboIdColeccion'].setValue(this.libro.idColeccion);

        } else {
          this.router.navigate(['/libros']);
        }

      }
    );

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

  modificar() {

    if (this.editarLibro.valid) {

      this.libro = {
        nombreLibro: this.editarLibro.controls['txtNombreLibro'].value,
        descripcion: this.editarLibro.controls['txtDescripcion'].value,
        yearPublicacion: this.editarLibro.controls['txtYearPublicacion'].value,
        noPaginas: this.editarLibro.controls['txtNoPaginas'].value,
        precio: this.editarLibro.controls['txtPrecio'].value,
        idAutor: this.editarLibro.controls['cboIdAutor'].value,
        idColeccion: this.editarLibro.controls['cboIdColeccion'].value,
        idLibro: parseInt( this.idLibro ),
      }

      this.librosService.editarLibro(this.libro).subscribe(
        (res: any) => {
          if (res.affectedRows > 0) {
            this.router.navigate(['/libros']);
          }
        }
      )

    }

  }

}
