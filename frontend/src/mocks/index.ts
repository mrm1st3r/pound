import { BaseRequestOptions, Http } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { ApplicationServiceMock } from './application.service.mock';
import { ApplicationService } from '../../src-gen';

export const MODULE_MOCKS = [
  HttpClientTestingModule,
  LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF }),
];

export const SERVICE_MOCKS = [
  { provide: ApplicationService, useClass: ApplicationServiceMock },
];
