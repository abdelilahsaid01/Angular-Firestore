import { AuthClientService } from './../services/auth-client.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {
  constructor( private authClientService:AuthClientService,
    private route:Router) { }
  
    canActivate():any {
       this.authClientService.getAuth().subscribe(auth => {
        if(!auth) {     
          this.route.navigateByUrl('/login')
          return false
        }else {
          return true
        }
      })
      return true
    }  
}




