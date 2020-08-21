import { AuthClientService } from './../../services/auth-client.service';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService: ClientService, private authClientService:AuthClientService) { }
clients:Client[]
searchClients:Client[]
total: number
  ngOnInit(): void {
    this.authClientService.getAuth().subscribe(auth => {
      this.clientService.getClientsByUser(auth.uid).subscribe(res => {
        this.searchClients=this.clients=res
        this.total= this.getTotal()
      })
    })
    // this.clientService.getClients().subscribe(res => {
    //   this.clients=res
    //   this.total= this.getTotal()
    // })
  }

  getTotal() {
   return this.clients.reduce((total,client)=> {  //Methode de calcul de total des client.balance boclé sur l'objet
      return total+parseFloat(client.balance.toString()) ;
    },0)
  }

  search(data:string) {
    this.searchClients = (data) ? this.clients.filter(client=> client.firstName.toLowerCase().includes(data.toLowerCase()) || client.lastName.toLowerCase().includes(data.toLowerCase()))  : this.clients
  }
}
