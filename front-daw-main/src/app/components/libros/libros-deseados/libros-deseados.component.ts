import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/database/libros.service';
import { LibrosdeseadosService } from 'src/app/services/database/librosdeseados.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Comentarios } from 'src/app/interfaces/libro.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-libros-deseados',
  templateUrl: './libros-deseados.component.html',
  styleUrls: ['./libros-deseados.component.css']
})
export class LibrosDeseadosComponent implements OnInit {

  libros: any[] = [];

  usuario: Usuario;

  showDialog: boolean = false;
  showComments: boolean = false;

  libroSelected: any;

  sortField: string = 'nombreLibro';

  sortF: string = '';

  comentarios: Comentarios[] = [];

  newComment: string = '';

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
    this.librosdeseadosService.obtenerLibrosDeseados(this.usuario.idUsuario).subscribe(
      (data: any) => {
        this.libros = data;
        console.log("this.libros", this.libros);
      }
    )
  }

  eliminarDeseado(libro: any){
    this.libroSelected = libro;
    this.showDialog = true;
  }

  confirmar(){
    if(this.libroSelected.idLibroDeseado){
      this.librosdeseadosService.eliminarLibroDeseado(this.libroSelected.idLibroDeseado.toString()).subscribe(
        (res: any) => {
          if (res.affectedRows > 0) {
            this.showDialog = false;
            this.libroSelected = null;
            this.listarLibros();
          }
        }
      );
      
    }
  }

  verComentarios(libro: any){
    this.libroSelected = libro;
    this.comentarios = [];
    this.obtenerComentarios();
    console.log(libro);
  }

  obtenerComentarios(){
    this.librosdeseadosService.obtenerComentariosLibro(this.libroSelected.idLibro).subscribe(
      (data: any) => {
        this.showComments = true;
        this.comentarios = data;
        console.log("this.comentarios", this.comentarios);
      }
    )
  }

  agregarComentario(){
    let datos: Comentarios = {
      idUsuario: this.usuario.idUsuario,
      idLibro: this.libroSelected.idLibro,
      comentario: this.newComment
    };

    this.librosdeseadosService.nuevoComentario(datos).subscribe(
      (res: any) => {
        if (res.affectedRows > 0) {
          this.newComment = '';
          this.obtenerComentarios();
        }
      }
    )
  }

}
