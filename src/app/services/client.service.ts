import { Client } from './../models/client';
import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clientDoc:AngularFirestoreDocument<Client>  //Récupérer le document
 clientsCollection:AngularFirestoreCollection<Client>  //C'est une fonction generique en met le model(interface ou entity)
  constructor(private afs: AngularFirestore) {
    this.clientsCollection= this.afs.collection('clients')   //saisir le nom de la collection/Récupérer la collection
   }

   getClients() {
    return this.clientsCollection.snapshotChanges().pipe(  //Récupérer la liste avec ID
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getClientsByUser(uid:string) {
    return this.afs.collection('clients', ref => ref.where('userID',"==",uid)).snapshotChanges().pipe(  //Récupérer la liste avec ID
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   addClient(client) {
     this.clientsCollection.add(client)
   }
   getClientById(id:string):Observable<Client> {
    return this.clientsCollection.doc(id).valueChanges()  //Récupérer le doc sans ID
   } 

   updateClient(client: Client) {
     this.clientsCollection.doc(client.id).update(client)
   }

   deleteClient(id:string) {
    this.clientsCollection.doc(id).delete()
   }
}
