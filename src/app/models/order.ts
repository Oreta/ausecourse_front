import {ListeCourse} from '../models/ListeCourse' ;
import {OrderState} from '../models/orderState' ;
export class Order {
	public id : string ; 
	public clientID : string ;
	public address : string ; 
	public livreurId : string ; 
	public listeCourse : ListeCourse ;
	public orderState : OrderState ;
	public string :string = "" ; 
}
