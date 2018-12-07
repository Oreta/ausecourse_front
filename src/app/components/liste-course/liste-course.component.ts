import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service' ;

import {Params, ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {Product} from '../../models/product' ;
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.css']
})
export class ListeCourseComponent implements OnInit {

  public commande: Product[] = [
    {id:"5" ,nom:"test",quantity:2,prix:32},
    {id:"7" ,nom:"te",quantity:2,prix:32},
    {id:"32" ,nom:"testine",quantity:2,prix:32}
  ];

  private produc:Product;

  constructor(
	  	private productService: ProductService,
	  	private router:Router,
	    private http:Http,
	    private route:ActivatedRoute) { }


  onAddProduct(){
    console.log(this.commande);
    this.produc.id = "7";
    this.produc.prix = 32;
    this.commande.push(produc);
  }

  ngOnInit() {
    console.log(this.commande);
    // this.productService.getProductList().subscribe(
    //   res => {
    //     console.log(res);
    //   },
    //   error => {
    //     // console.log(error.text());
    //     // let errorMessage = error.text();
    //   }
    // );
  }

}
