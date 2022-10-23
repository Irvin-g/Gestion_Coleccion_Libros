import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Usuario } from '../interfaces/usuario.interface';
import { LoginService } from '../services/database/login.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    usuario: Usuario;

    constructor(public appMain: AppMainComponent, private loginService: LoginService) { }

    ngOnInit(): void {
        const local = localStorage.getItem('usuario');

        if (local !== null) {
            this.usuario = JSON.parse(local);
        }
    }
    

    logoutUser(){
        this.loginService.logOut();
    }
}
