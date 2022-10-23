import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//Imports
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Prime ng
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { MessageService } from 'primeng/api';
import { DropdownModule } from "primeng/dropdown";
import { DividerModule } from "primeng/divider";

//Services
import { ConfigService } from './services/app.config.service';
import { MenuService } from './services/app.menu.service';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoginService } from './services/database/login.service';

//Componentes
import { AppComponent } from './app.component';
import { AppMainComponent } from './main/app.main.component';
import { AppTopBarComponent } from './main/app.topbar.component';
import { AppMenuComponent } from './main/app.menu.component';
import { AppMenuitemComponent } from './main/app.menuitem.component';
import { AppFooterComponent } from './main/app.footer.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppTopBarComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppFooterComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    PasswordModule,
    FormsModule,
    RippleModule,
    ButtonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DropdownModule,
    DividerModule,
    DialogModule,
    InputTextModule,
    InputMaskModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule.forRoot(),

  ],
  providers: [
    ConfigService,
    MenuService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    MessageService,
    HttpErrorHandler,
    LoginService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
