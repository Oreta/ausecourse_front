import {Review} from './review' ;
import {Order} from './order' ;
export class User {
	public id:string ;
	public username:string;
	public password:string ;
	public email:string;
	public city:string;
	public numeroRoad:number;
	public Road:string;
	public tel:number;
	public client : boolean ; 
	public deliverer : boolean ;
	public stars : number ; 
	public reviews : Review[] = [] ; 
	public ordersToHandle : Order[] = [] ; 
}
