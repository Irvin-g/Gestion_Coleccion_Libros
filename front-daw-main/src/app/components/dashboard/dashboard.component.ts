import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/database/libros.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datosDashboard : any;

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.obtenerConteoDashboard();
  }

  obtenerConteoDashboard() {

    this.librosService.obtenerConteoDashboard().subscribe(
      (data: any) => {
        this.datosDashboard = data[0];
        console.log("this.datosDashboard", this.datosDashboard);
      }
    )
  }

}
