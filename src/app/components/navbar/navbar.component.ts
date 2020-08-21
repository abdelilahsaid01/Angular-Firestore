import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isloggedIn:boolean=false
userLogged: string
  constructor(private authClientService:AuthClientService,
    private fms:FlashMessagesService,
    private route:Router) { }

  ngOnInit(): void {
    this.authClientService.getAuth().subscribe(auth => {
      if(auth) {
        this.isloggedIn=true
        this.userLogged=auth.email
      }else {
        this.isloggedIn= false
      }
    })
  }

logOut() {
  this.authClientService.logOut()
  this.isloggedIn=false
  this.route.navigateByUrl('/login')
}

}
