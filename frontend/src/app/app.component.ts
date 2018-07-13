import { Component } from '@angular/core';
import { CallControllerService } from '../../src-gen';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private serviceClient: CallControllerService,
    private logger: NGXLogger) {

  }
  printApplications(): void {
    this.serviceClient.getCalls('test').subscribe(
        apps => apps.forEach(
            call => this.logger.debug('Application:', call.dst, call.src, call.calldate)
        )
    );
  }
}
