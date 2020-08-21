import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string
password: string
  constructor( private authClientService:AuthClientService,
              private fms:FlashMessagesService,
              private route:Router) { }

  ngOnInit(): void {
    this.authClientService.getAuth().subscribe(auth => {
      if(auth) {
        this.route.navigateByUrl('/')
      }
    })
  }

  onLogin() {
    this.authClientService.login(this.email, this.password)
    .then(auth => {
      if(auth) {
        this.fms.show('you are logged successfully!', {
          cssClass:"alert-success",
          timeout:5000
        })
      }
      this.route.navigateByUrl('/')
    })
    .catch(error => {
      this.fms.show(error.message, {
        cssClass:"alert-danger",
        timeout:10000
    }) 
  })
}

onLoginGoogle() {
  this.authClientService.loginWithGoogle()
  .then(auth => {
    if(auth) {
      this.fms.show('you are logged successfully!', {
        cssClass:"alert-success",
        timeout:5000
      })
    }
    this.route.navigateByUrl('/')
  })
  .catch(error => {
    this.fms.show(error.message, {
      cssClass:"alert-danger",
      timeout:10000
  }) 
})
}


}
