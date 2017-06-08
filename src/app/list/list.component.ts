import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private elements: any[];

  constructor(private service: ListService) {
  	this.elements = [
  		{parent: '12356', token: 'abcdef'},
  		{parent: '12356', token: 'abcdef'}
  	];
  }

  ngOnInit() {
  }

}
