import { Component, OnInit } from '@angular/core';
import { ColeccionService } from 'src/app/services/database/coleccion.service';
import { Coleccion } from '../../../interfaces/coleccion.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-colecciones',
  templateUrl: './lista-colecciones.component.html',
  styleUrls: ['./lista-colecciones.component.css']
})
export class ListaColeccionesComponent implements OnInit {

  colecciones: Coleccion[] = [];

  coleccionSelected: Coleccion;

  deleteDialog: boolean = false;

  constructor(
    private coleccionService: ColeccionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarColecciones();
  }

  listarColecciones() {

    this.coleccionService.obtenerColecciones().subscribe(
      (data: any) => {
        this.colecciones = data;
        console.log("this.colecciones", this.colecciones);
      }
    );
  }

  agregarColeccion(){
    this.router.navigate(['/coleccion/agregarColeccion']);
  }

  editarColeccion(coleccion: Coleccion){
    this.router.navigate(['/coleccion/editarColeccion/' + coleccion.idColeccion ]);
  }

  eliminarColeccion(data: Coleccion){
    this.coleccionSelected = data;
    this.deleteDialog = true;
  }

  confirmarEliminar(){

    if(this.coleccionSelected.idColeccion){
      this.coleccionService.disableColeccion(this.coleccionSelected.idColeccion.toString()).subscribe(
        (res: any) => {
          if (res.affectedRows > 0) {
            this.deleteDialog = false;
            this.listarColecciones();
          }
        }
      );
    }

  }

}
