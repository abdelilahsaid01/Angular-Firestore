import { AuthClientService } from './../../services/auth-client.service';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
client: Client = {
    firstName : "",
    lastName : "",
    email : "",
    phone: null,
    balance: 0,
    userID:"" }
  constructor(private clientService: ClientService,private authClientService: AuthClientService,  private route: Router, private flashMessages:FlashMessagesService) { }

  ngOnInit(): void {
    this.authClientService.getAuth().subscribe(auth => {
this.client.userID= auth.uid
})
  }

  addClient() {
    this.clientService.addClient(this.client)
   // this.route.navigate(['/'])
   this.flashMessages.show('Client added with seccessfuly', {cssClass:'alert-primary',timeout:3000})
   this.route.navigateByUrl('/')
  }
}
