import { Component } from '@angular/core';
import { ApplicationService } from '../../src-gen';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private serviceClient: ApplicationService,
    private logger: NGXLogger) {

  }
  printApplications(): void {
    this.serviceClient.getApplications('test').subscribe(apps => apps.forEach(app => this.logger.debug('Application:', app.name)));
  }
}
