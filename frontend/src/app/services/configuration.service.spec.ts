import { HttpClientModule } from '@angular/common/http';
import { TestBed, getTestBed } from '@angular/core/testing';
import { ConfigurationService } from './configuration.service';
import { MODULE_MOCKS, SERVICE_MOCKS } from '../../mocks';

describe('ConfigurationService', () => {

  let injector: TestBed;
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MODULE_MOCKS,
      ],
      providers: [
        SERVICE_MOCKS,
        // neede to resolve Can't resolve all parameters for ConfigurationService: (?)
        { provide: ConfigurationService, useValue: new ConfigurationService() },
      ]
    }).compileComponents();
    injector = getTestBed();
    service = injector.get(ConfigurationService);
  });

  it('should init', () => {
    expect(service).toBeDefined();
  });

});
