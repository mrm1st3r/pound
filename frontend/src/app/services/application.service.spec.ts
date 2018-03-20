import { HttpEvent, HttpEventType } from '@angular/common/http';
import { RequestMethod } from '@angular/http';
import { TestBed, getTestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Application, ApplicationService } from '../../../src-gen';
import { MODULE_MOCKS, SERVICE_MOCKS, } from '../../mocks';

// normally we don't test generated code, this is just for showing how to mock HTTP requests!!!
describe('ApplicationService', () => {

  let injector: TestBed;
  let service: ApplicationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MODULE_MOCKS,
      ],
      providers: [
        SERVICE_MOCKS,
        ApplicationService,
      ]
    }).compileComponents();
    injector = getTestBed();
    service = injector.get(ApplicationService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should init', () => {
    expect(service).toBeDefined();
  });

  it('should create application', () => {
    // given
    const application = <Application>{};
    // when
    service.createApplication('42', application).subscribe((applicationID: string) => {
      // then
      expect(applicationID).toBeDefined();
    });

    const mockReq = httpMock.expectOne({ method: 'POST', url: 'http://localhost/application-api/v1/applications/42' });
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(application);

  });

});
