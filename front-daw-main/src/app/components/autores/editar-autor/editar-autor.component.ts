import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/database/autores.service';
import { Autor } from '../../../interfaces/autores.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {

  editarAutor: FormGroup;

  autor: Autor;

  idAutor: string;

  constructor(
    private autoresService: AutoresService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {

    this.idAutor = this.route.snapshot.params['idAutor'];

    this.editarAutor = this.formBuilder.group({
      txtNombreAutor: [null, Validators.compose([Validators.required])],
      txtApellidosAutor: [null, Validators.compose([Validators.required])],
      txtNacionalidad: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {

    this.obtenerAutorPorId();

  }

  obtenerAutorPorId(){

    this.autoresService.obtenerAutorPorId(this.idAutor).subscribe(
      (data: any) => {
        this.autor = data[0];

        console.log("this.autor", this.autor);

        if(this.autor){
          this.editarAutor.controls['txtNombreAutor'].setValue(this.autor.nombreAutor);
          this.editarAutor.controls['txtApellidosAutor'].setValue(this.autor.apellidosAutor);
          this.editarAutor.controls['txtNacionalidad'].setValue(this.autor.nacionalidad);

        }else{
          this.router.navigate(['/autores']);
        }

      }
    )

  }

  modificar(){

    if(this.editarAutor.valid){

      this.autor = {
        nombreAutor: this.editarAutor.controls['txtNombreAutor'].value,
        apellidosAutor: this.editarAutor.controls['txtApellidosAutor'].value,
        nacionalidad: this.editarAutor.controls['txtNacionalidad'].value,
        idAutor: parseInt( this.idAutor )
      }

      this.autoresService.editarAutor(this.autor).subscribe(
        (res: any) => {
          if(res.affectedRows > 0){
            this.router.navigate(['/autores']);
          }
        }
      )

    }

  }

}
