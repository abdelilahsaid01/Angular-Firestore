import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.css']
})
export class DetailsClientComponent implements OnInit {
id:string
client:Client
showBalance : boolean = false
  constructor(private clientService:ClientService, private route: ActivatedRoute, private router: Router, private flashMessages:FlashMessagesService ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']  //Id mentionnée dans la petie de Routage
    this.clientService.getClientById(this.id).subscribe(client=> {
       this.client=client
      console.log(this.client)
    }
      )
  }
onSubmit() {
  this.client.id=this.id//Car la methode change value ne récupére pas ID
  this.clientService.updateClient(this.client)
  this.flashMessages.show('Client updated with seccessfuly', {cssClass:'alert-primary',timeout:4000})
this.showBalance=false
}

deleteClient() {    
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            this.clientService.deleteClient(this.id)
        this.flashMessages.show('Client deleted with seccessfuly', {cssClass:'alert-primary',timeout:4000})
        this.router.navigateByUrl('/') 
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success',
            )
          }
        })

//  this.router.navigate(['client/', this.id])
 }
}
