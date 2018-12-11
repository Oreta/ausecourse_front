import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service' ;
import {UserService} from '../../services/user.service' ;
import {CookieService} from 'angular2-cookie/core';
import {Product} from '../../models/product' ;
import {User} from '../../models/user'; 
import {ListeCourse} from "../../models/ListeCourse" ;

@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.css']
})
export class ListeCourseComponent implements OnInit {

  private productsList: Product[] = [];
  private listeCourse : ListeCourse = new ListeCourse(); 
  private listaux : Product[] = [] ; 
  private name : string ; 
  private qty : number ;
  private productAdded : boolean ; 
  private currentUser : User ;
  private listeCourseSaved : boolean ; 

  constructor(
	  	private productService: ProductService,
      private cookieService : CookieService,
      private userService : UserService) { 
    
  }

  getProductList(){
    this.productService.getProductList().subscribe(
      (res:ListeCourse) => {
        this.listeCourse = res ; 
        this.listaux = res.listeCourse;
   
      },
      error => {
        console.log(error);      
      }
    );
  }

  onCheckout(){
    /*
      this.productService.save(this.listeCourse).subscribe(
        (res:string) => {
          this.cookieService.put("listId",res);
          this.productAdded = true ; 
          this.getProductList();
        },
        error => {
          console.log(error);      
        }      
      ); */    
  }

  onAddProduct(){

    this.productService.addProduct(this.name,this.qty).subscribe(
      (res:string) => {
        this.productAdded = true ; 
        //this.listaux[this.name] = this.qty;
        this.getProductList();
      },
      error => {
        console.log(error);      
      }
    );
  } 

  ngOnInit() {

    this.userService.getCurrentUser().subscribe(
      res => {
        this.currentUser = res.json() ;
        this.listeCourse.mail = this.currentUser.email ; 
        if(this.cookieService.get("listId") == null){
          this.productService.save(this.listeCourse).subscribe(
            (res:string) => {
              this.listeCourseSaved = true ;
              this.cookieService.put("listId",res);
              this.getProductList();
            },
            error => {
              console.log(error); 
              this.productAdded = false ;
            }
          );          
        }else {
          this.getProductList();
        }


      },
      error => {
        console.log(error);
      }      
    );

  }

}
