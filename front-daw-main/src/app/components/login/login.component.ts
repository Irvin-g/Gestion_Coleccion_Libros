import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/database/login.service';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string = '';

  correo: string = '';

  loggedIn: boolean;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {

    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: '175575896604-v28mhl2e3vkraigr71925jgi6cmaojpb.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "100%" }
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => { });
    };

  }

  loginUser() {
    this.router.navigate(['dashboard']);
  }

  handleCredentialResponse(response: CredentialResponse) {
    console.log("response", response);
    this.loginService.loginGoogle(response).subscribe(
      (res: any) => {
        console.log(res);

        if(res.code == "LOGIN"){

          localStorage.setItem("usuario", JSON.stringify(res.payload));
  
          this.ngZone.run(() => {
            this.router.navigate(['/dashboard']);
          });

        }

      }
    );
  }

  loginGoogle() {
   
  }

}
