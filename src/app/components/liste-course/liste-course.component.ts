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

  private commande: Product[] = [
    {id:"5" ,nom:"test",quantity:2,prix:32}
  ];

  constructor(
	  	private productService: ProductService,
	  	private router:Router,
	    private http:Http,
	    private route:ActivatedRoute) { }

  onUpdateCourse(){
    
  }


  ngOnInit() {
    this.productService.getProductList().subscribe(
      res => {
        console.log(res);
      },
      error => {
        // console.log(error.text());
        // let errorMessage = error.text();
      }
    );
  }

}
