import { HttpClientModule } from '@angular/common/http';
import { ApplicationService } from './../../src-gen/api/application.service';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';

describe('AppComponent', () => {

  let fixture,component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        ButtonModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ApplicationService
      ]
    }).compileComponents();
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
