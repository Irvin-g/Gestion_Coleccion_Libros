import { Component, OnInit } from '@angular/core';
import { AutoresService } from 'src/app/services/database/autores.service';
import { Autor } from '../../../interfaces/autores.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-autores',
  templateUrl: './lista-autores.component.html',
  styleUrls: ['./lista-autores.component.css']
})
export class ListaAutoresComponent implements OnInit {

  autores: Autor[] = [];

  autorSelected: Autor;

  deleteDialog: boolean = false;

  constructor(
    private autoresService: AutoresService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarAutores();
  }

  listarAutores() {

    this.autoresService.obtenerAutores().subscribe(
      (data: any) => {
        this.autores = data;
        console.log("this.autores", this.autores);
      }
    );

  }

  agregarAutor() {
    this.router.navigate(['/autores/agregarAutor']);
  }

  editarAutor(autor: Autor) {
    this.router.navigate(['/autores/editarAutor/' + autor.idAutor]);
  }

  deleteAutor(data: Autor) {
    this.autorSelected = data;
    this.deleteDialog = true;
  }

  confirmarEliminar() {

    if (this.autorSelected.idAutor) {
      this.autoresService.disableAutor(this.autorSelected.idAutor.toString()).subscribe(
        (res: any) => {
          if (res.affectedRows > 0) {
            this.deleteDialog = false;
            this.listarAutores();
          }
        }
      );
    }

  }


}
