import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/database/autores.service';
import { Autor } from '../../../interfaces/autores.interface';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-agregar-autor',
  templateUrl: './agregar-autor.component.html',
  styleUrls: ['./agregar-autor.component.css']
})
export class AgregarAutorComponent implements OnInit {

  agregarAutor: FormGroup;

  autor: Autor;

  usuario: Usuario;

  constructor(
    private autoresService: AutoresService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.agregarAutor = this.formBuilder.group({
      txtNombreAutor: [null, Validators.compose([Validators.required])],
      txtApellidosAutor: [null, Validators.compose([Validators.required])],
      txtNacionalidad: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    const local = localStorage.getItem('usuario');

    if (local !== null) {
      this.usuario = JSON.parse(local);
    }
  }

  guardar() {
    console.log(this.agregarAutor.getRawValue());

    if (this.agregarAutor.valid) {

      this.autor = {
        nombreAutor: this.agregarAutor.controls['txtNombreAutor'].value,
        apellidosAutor: this.agregarAutor.controls['txtApellidosAutor'].value,
        nacionalidad: this.agregarAutor.controls['txtNacionalidad'].value,
        estado: 'A',
        createdBy: this.usuario.idUsuario,
      }

      this.autoresService.crearAutor(this.autor).subscribe(
        (res: any) => {
          if (res.affectedRows > 0) {
            this.router.navigate(['/autores']);
          }
        }
      )

    }

  }

}
