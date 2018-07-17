import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Client } from '../../modules/client';

declare let M: any;

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getProduct();
  }

  addProduct(form: NgForm) {
    if (form.value._id) {
      this.clientService.putProduct(form.value)
        .subscribe(res => {
          console.log(res);
        });
    } else {
      this.clientService.postProduct(form.value).subscribe(data => {
        this.resetForm(form);
        M.toast({ html: 'Producto Guardado' });
        this.getProduct();
      });
    }
  }

    getProduct() {
      this.clientService.getProducts()
        .subscribe(res => {
          this.clientService.clients = res as Client[];
          console.log(res);
        });
    }

    editProduct(client: Client) {
      this.clientService.selectedClient = client;
    }
    resetForm(form ?: NgForm) {
      if (form) {
        form.reset();
        this.clientService.selectedClient = new Client();
      }

    }

  }
