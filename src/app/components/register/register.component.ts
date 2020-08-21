import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email:string
password:string
password2:string

  constructor(private authClientService:AuthClientService,
    private fms:FlashMessagesService,
    private route:Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    if(this.password==this.password2) { 
    this.authClientService.register(this.email,this.password)
    .then(() => {
      if(this.password==this.password2) {
      this.fms.show('you are logged successfully!', {
        cssClass:"alert-success",
        timeout:5000
    }) 
    this.route.navigateByUrl('/') }
    })
  .catch((error)=> {
    this.fms.show(error, {
      cssClass:"alert-danger",
      timeout:5000
  })
}) }
else {
  this.fms.show('verify your password!', {
    cssClass:"alert-success",
    timeout:5000
})
}
 } 
}
