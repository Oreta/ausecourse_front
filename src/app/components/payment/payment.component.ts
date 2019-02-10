import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

	public clientPaid : boolean = false ; 

  constructor() { }

  onPaid() {
  	this.clientPaid = true;
  }

  ngOnInit() {
  }

}
