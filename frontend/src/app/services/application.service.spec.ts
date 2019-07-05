import {getTestBed, TestBed} from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import {CallControllerService} from '../../../src-gen';
import {MODULE_MOCKS, SERVICE_MOCKS,} from '../../mocks';

// normally we don't test generated code, this is just for showing how to mock HTTP requests!!!
describe('ApplicationService', () => {

  let injector: TestBed;
  let service: CallControllerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MODULE_MOCKS,
      ],
      providers: [
        SERVICE_MOCKS,
        CallControllerService,
      ]
    }).compileComponents();
    injector = getTestBed();
    service = injector.get(CallControllerService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should init', () => {
    expect(service).toBeDefined();
  });
});
