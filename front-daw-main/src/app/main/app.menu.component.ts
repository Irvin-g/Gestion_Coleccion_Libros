import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menuitem class="layout-menuitem-category" *ngFor="let item of menu; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    menu: any[] = [];

    setupMenu: any[] = [];

    constructor(
        public appMain: AppMainComponent,
        private http: HttpClient,
    ) { }

    ngOnInit() {


        this.menu = [
            {
                label: 'Menú',
                items:[
                    {label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: ['/']},
                    {label: 'Libreria ', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/libros/libreria']},
                    {label: 'Libros Deseados', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/libros/librosdeseados']},
                ]
            },
            {
                label: 'Mantenimientos',
                items:[
                    {label: 'Libros', icon: 'pi pi-fw pi-bookmark', routerLink: ['/libros']},
                    {label: 'Autores', icon: 'pi pi-fw pi-id-card', routerLink: ['/autores']},
                    {label: 'Colecciones', icon: 'pi pi-fw pi-check-square', routerLink: ['/coleccion']},
                ]
            },
        ];

    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement> event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
