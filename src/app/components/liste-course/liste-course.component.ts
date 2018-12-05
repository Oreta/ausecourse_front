import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.css']
})
export class ListeCourseComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'quantity'];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
  }

}

export interface Commande {
  name: string;
  quantity: number;
}

const ELEMENT_DATA: Commande[] = [
  {name: 'prem', quantity: 2},
  {name: 'test', quantity: 2},
  {name: 'light', quantity: 2},
];
