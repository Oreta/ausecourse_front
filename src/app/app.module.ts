import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' ;
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatDialogModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		MatStepperModule} from '@angular/material' ;

import { routing } from './app.routing';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayAccountComponent } from './components/display-account/display-account.component';
import { ModifAccountComponent } from './components/modif-account/modif-account.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import {NavbarComponent} from './components/navbar/navbar.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DisplayAccountComponent,
    ModifAccountComponent,
    CatalogueComponent,
    NavbarComponent
  ],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	NoopAnimationsModule,
	FormsModule,
	HttpModule,
	routing,
	HttpClientModule,
	MatAutocompleteModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDatepickerModule,
	MatDialogModule,
	MatExpansionModule,
	MatGridListModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatNativeDateModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatRadioModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSlideToggleModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatTooltipModule,
	MatStepperModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
