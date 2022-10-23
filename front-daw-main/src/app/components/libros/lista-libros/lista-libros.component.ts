import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/database/libros.service';
import { Libro, LibrosView } from '../../../interfaces/libro.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros: LibrosView[] = [];

  libroSelected: LibrosView;

  deleteDialog: boolean = false;

  constructor(
    private librosService: LibrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarLibros();
  }

  listarLibros() {

    this.librosService.obtenerLibrosViewTabla().subscribe(
      (data: any) => {
        this.libros = data;
        console.log("this.libros", this.libros);
      }
    )
  }

  agregarLibro() {
    this.router.navigate(['/libros/agregarLibro']);
  }

  editarLibro(libro: LibrosView) {
    this.router.navigate(['/libros/editarLibro/' + libro.idLibro]);
  }

  deleteLibro(data: LibrosView) {
    this.libroSelected = data;
    this.deleteDialog = true;
  }

  confirmarEliminar(){

    if(this.libroSelected.idLibro){

      this.librosService.disableLibro(this.libroSelected.idLibro.toString()).subscribe(
        (res: any) => {
          if (res.affectedRows > 0) {
            this.deleteDialog = false;
            this.listarLibros();
          }
        }
      );
      
    }

  }

}
