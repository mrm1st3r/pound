import {Component, OnInit} from '@angular/core';
import { CallControllerService } from '../../src-gen';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pound';
  calls;

  constructor(private serviceClient: CallControllerService,
    private logger: NGXLogger) {
  }

  getCalls(): void {
    this.serviceClient.getCalls().subscribe(
        calls => this.calls = calls
    );
  }

  ngOnInit() {
    this.getCalls();
  }
}
