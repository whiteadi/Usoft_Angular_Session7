import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-grid',
  templateUrl: './info-grid.component.html',
  styleUrls: ['./info-grid.component.css']
})
export class InfoGridComponent implements OnInit {

  persons: any = [];

  @Input() personsInput: any;

  constructor() { }

  ngOnInit(): void {
    this.persons = this.personsInput;
  }

  ngOnChanges(): void {
    this.persons = this.personsInput;
  }

}
