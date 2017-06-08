import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private elements: any[];

  constructor() {
  	this.elements = ['test1'];
  }

  ngOnInit() {
  }

}
