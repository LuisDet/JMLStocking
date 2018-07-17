import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../modules/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  selectedClient: Client;
  clients: Client[];

  readonly URL_API = 'http://localhost:3001/api/product';

  constructor(private http: HttpClient) {
    this.selectedClient = new Client();
   }

getProducts() {
  return this.http.get(this.URL_API);
}

postProduct(client: Client) {
  return this.http.post(this.URL_API, client);
}

putProduct(client: Client) {
  return this.http.put(this.URL_API + `/${client._id}`, Client);
}

deleteProduct(_id: String) {
  return this.http.delete(this.URL_API + `/${_id}`);
}
}
