import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'pound-frequent-numbers',
  templateUrl: './frequent-numbers.component.html',
  styleUrls: ['./frequent-numbers.component.scss']
})
export class FrequentNumbersComponent implements OnInit {

  public calls$ = of([
    {number: '12345', duration: 5238},
    {number: '12346', duration: 2127},
    {number: '12348', duration: 420},
    {number: '12347', duration: 69},
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
