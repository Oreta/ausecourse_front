import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service' ;
import {CookieService} from 'angular2-cookie/core';
import {Product} from '../../models/product' ;


@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.css']
})
export class ListeCourseComponent implements OnInit {

  public productsList: Product[] = [];
  private product:Product;
  private productAdded : boolean ; 

  constructor(
	  	private productService: ProductService,
      private cookieService : CookieService) { }

  getProductList(){
    this.productService.getProductList().subscribe(
      (res:Product[]) => {
        this.productsList = res ; 
      },
      error => {
        console.log(error);      
      }
    );
  }

  onAddProduct(){
    this.product.listId = this.cookieService.get("listId");
    this.productService.addToShoppingList(this.product).subscribe(
      res => {
        this.productAdded = true ; 
        this.getProductList();
      },
      error => {
        this.productAdded = false ;
      }
    );
  }

  ngOnInit() {

    //this.getProductList();
    
  }

}
