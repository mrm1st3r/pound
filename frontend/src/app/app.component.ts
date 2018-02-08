import {Component} from '@angular/core';
import {ApplicationService} from '../../src-gen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private serviceClient: ApplicationService){

  }
  printApplications(): void {
    this.serviceClient.getApplications("test").subscribe(apps => apps.forEach(app =>  console.log('Application:', app.name)));
  }
}
