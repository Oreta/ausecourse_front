import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router' ;
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {DisplayAccountComponent} from './components/display-account/display-account.component';
import {ModifAccountComponent} from './components/modif-account/modif-account.component';
import {CatalogueComponent} from './components/catalogue/catalogue.component' ; 

const appRoutes: Routes = [
	{
		path : '' ,
		redirectTo: '/' ,
		pathMatch: 'full'
	},
	{
		path: 'login' ,
		component: LoginComponent
	},
	{
		path: 'home' ,
		component: HomeComponent
	},
	{
		path: 'displayAccount' ,
		component: DisplayAccountComponent
	},
	{
		path: 'modifAccount' ,
		component: ModifAccountComponent
	},
	{
		path: 'catalogue' ,
		component: CatalogueComponent
	},

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
