import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'pound-call-partners',
  templateUrl: './call-partners.component.html',
  styleUrls: ['./call-partners.component.scss']
})
export class CallPartnersComponent implements OnInit {

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
