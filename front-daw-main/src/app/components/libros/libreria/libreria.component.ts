import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/database/libros.service';
import { LibrosdeseadosService } from 'src/app/services/database/librosdeseados.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  libros: any[] = [];

  usuario: Usuario;

  showDialog: boolean = false;

  libroSelected: any;

  sortField: string = 'nombreLibro';

  sortF: string = '';

  constructor(
    private librosService: LibrosService,
    private librosdeseadosService: LibrosdeseadosService,
  ) { }

  ngOnInit(): void {
    const local = localStorage.getItem('usuario');

    if (local !== null) {
      this.usuario = JSON.parse(local);
    }

    this.listarLibros();
  }

  listarLibros() {
    this.libros = [];
    this.librosService.obtenerLibrosViewTablaConDeseados(this.usuario.idUsuario).subscribe(
      (data: any) => {
        this.libros = data;
        console.log("this.libros", this.libros);
      }
    )
  }

  agregarDeseado(libro: any){
    if(!libro.idLibroDeseado){
      this.libroSelected = libro;
      this.showDialog = true;
    }
  }

  confirmar(){

    let datos = {
      idLibro: this.libroSelected.idLibro,
      idUsuario: this.usuario.idUsuario
    };

    this.librosdeseadosService.nuevoLibroDeseado(datos).subscribe(
      (res: any) => {
        if (res.affectedRows > 0) {
          this.showDialog = false;
          this.libroSelected = null;
          this.listarLibros();
        }
      }
    )
  }


}
