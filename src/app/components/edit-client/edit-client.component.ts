import Swal from 'sweetalert2';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string
  client:Client
  constructor(private clientService:ClientService, private route: ActivatedRoute,private router: Router,  private flashMessages:FlashMessagesService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']  //Id mentionnée dans la petie de Routage
    this.clientService.getClientById(this.id).subscribe(client=> {
       this.client=client
      console.log(this.client)
    }
      )
  }
  updateClient() {
    Swal.fire({
      title: 'هل تريد الاستمرار؟',
      icon: 'question',
      iconHtml: '؟',
      confirmButtonText: 'نعم',
      cancelButtonText: 'لا',
      showCancelButton: true,
      showCloseButton: true
    }).then((result) => {
      if (result.value) {
        this.client.id=this.id
        this.clientService.updateClient(this.client)
        this.flashMessages.show('Client updated with seccessfuly', {cssClass:'alert-primary',timeout:4000})
        this.router.navigateByUrl('/')
        Swal.fire( {
          title:  'Updated!',
          text:'Your file has been updeted.',
         icon:  'success',
         timer: 3000
        }     
        )
      }
    })
    
    
  }
}
