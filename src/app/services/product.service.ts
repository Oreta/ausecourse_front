import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable' ;
import {Router} from '@angular/router' ;
import {User} from '../models/user' ;
import {Product} from '../models/product' ;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private serverPath: string = "http://127.0.0.1:8080" ;

  constructor(private http: Http, private router:Router) { }

  createList(courses: any[]){
    
  }

}
