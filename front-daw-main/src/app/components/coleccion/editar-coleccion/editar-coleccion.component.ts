import { Component, OnInit } from '@angular/core';
import { ColeccionService } from 'src/app/services/database/coleccion.service';
import { Coleccion } from '../../../interfaces/coleccion.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-coleccion',
  templateUrl: './editar-coleccion.component.html',
  styleUrls: ['./editar-coleccion.component.css']
})
export class EditarColeccionComponent implements OnInit {

  editarColeccion: FormGroup;

  coleccion: Coleccion;

  idColeccion: string;

  constructor(
    private coleccionService: ColeccionService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.idColeccion = this.route.snapshot.params['idColeccion'];

    this.editarColeccion = this.formBuilder.group({
      txtNombre: [null, Validators.compose([Validators.required])],
      txtDescripcion: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    this.obtenerColeccionPorId();
  }

  obtenerColeccionPorId(){

    this.coleccionService.obtenerColeccionPorId(this.idColeccion).subscribe(
      (data: any) => {
        this.coleccion = data[0];

        console.log("this.coleccion", this.coleccion);

        if(this.coleccion){
          this.editarColeccion.controls['txtNombre'].setValue(this.coleccion.nombreColeccion);
          this.editarColeccion.controls['txtDescripcion'].setValue(this.coleccion.descripcion);

        }else{
          this.router.navigate(['/coleccion']);
        }

      }
    )

  }

  modificar(){

    if(this.editarColeccion.valid){

      this.coleccion = {
        nombreColeccion: this.editarColeccion.controls['txtNombre'].value,
        descripcion: this.editarColeccion.controls['txtDescripcion'].value,
        idColeccion: parseInt( this.idColeccion )
      }

      this.coleccionService.editarColeccion(this.coleccion).subscribe(
        (res: any) => {
          if(res.affectedRows > 0){
            this.router.navigate(['/coleccion']);
          }
        }
      )

    }

  }

}
