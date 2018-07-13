import { BaseRequestOptions, Http } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CallControllerServiceMock } from './application.service.mock';
import { CallControllerService } from '../../src-gen';

export const MODULE_MOCKS = [
  HttpClientTestingModule,
  LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF }),
];

export const SERVICE_MOCKS = [
  { provide: CallControllerService, useClass: CallControllerServiceMock },
];
