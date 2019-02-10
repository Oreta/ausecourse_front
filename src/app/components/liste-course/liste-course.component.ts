import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service' ;
import {UserService} from '../../services/user.service' ;
import {CookieService} from 'angular2-cookie/core';
import {Product} from '../../models/product' ;
import {User} from '../../models/user';
import {ListeCourse} from "../../models/ListeCourse" ;
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.css']
})
export class ListeCourseComponent implements OnInit {

  public productsList: Product[] = [];
  public listeCourse : ListeCourse = new ListeCourse();
  public listaux : Product[] = [] ;
  public name : string ;
  public qty : number ;
  public productAdded : boolean ;
  public currentUser : User ;
  public listeCourseSaved : boolean ; 

  constructor(
	  	private productService: ProductService,
      private cookieService : CookieService,
      private userService : UserService,
        private route: ActivatedRoute,
  private router: Router,
  private snackBar: MatSnackBar) {

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

  openSnackBar() {
    this.snackBar.open("ajoutez au moins 1 produit à votre liste :(", null, {
      duration: 5000,
    });

  }

  onCheckout(){
    if(this.listaux.length==0){
      this.openSnackBar();
    }
    else
      this.router.navigate(['/livreurs']);
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
          this.listeCourse.address = this.currentUser.city ;
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
