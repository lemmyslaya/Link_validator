import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

import { Link } from '../link';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  newItems: Object;

  private elements: Link[];

  constructor(private service: ListService) {}

  ngOnInit() {
    this.service.get().then((result) => {
      this.elements = result;
    });
    console.log(this.service.returnPost());
    this.newItems = this.service.returnPost();

  }

}
