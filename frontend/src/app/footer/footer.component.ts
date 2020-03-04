import { Component, OnInit } from '@angular/core';
import { version as packageVersion } from '../../../package.json';

@Component({
  selector: 'pound-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly version = packageVersion;

  constructor() { }

  ngOnInit(): void {
  }

}
