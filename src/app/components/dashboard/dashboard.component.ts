import { AuthClientService } from './../../services/auth-client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authClientService:AuthClientService,
    private route:Router) { }

  ngOnInit(): void {
    this.authClientService.getAuth().subscribe(auth => {
      if(!auth) {
        this.route.navigateByUrl('/login')
      }
    })
  }

}
