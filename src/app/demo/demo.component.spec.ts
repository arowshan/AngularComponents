import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { MatIconModule } from '@angular/material/icon';
import { DoublePipe } from 'src/app/pipes/double.pipe';
import { HttpClientService } from 'src/app/http-client/http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from '../common/common.service';
import { By } from '@angular/platform-browser';

describe('DemoComponent', () => {
  let component: DemoComponent = new DemoComponent();
  let fixture: ComponentFixture<DemoComponent>;
  let httpService: HttpClientService;
  let commonService: CommonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DemoComponent,
        DoublePipe
      ],
      imports:[
        MatIconModule,
        HttpClientModule
      ],
      // providers: [
      //   HttpClientService
      // ]
    });

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.debugElement.componentInstance;
    httpService = fixture.debugElement.injector.get(HttpClientService);
    commonService = fixture.debugElement.injector.get(CommonService);
    fixture.detectChanges();
    
  }));

  it('should create component without errors', () => {
    expect(component).toBeTruthy();
  });

  it('should call service function and return value', () => {
    expect(component.getSomething()).toBe(5);
  });

  
  it('should spy on common service and check that return value is less than 10', () => {
    let spy = spyOn(commonService, 'getAsyncData').and.returnValue(Promise.resolve('DD'));
    fixture.detectChanges();
    expect(component.data).toBe('DD');
  });

  // Testing DOM element text content
  xit('should see John Doe in h2', () => {
    let el = fixture.debugElement.query(By.css('h2'));
    expect(el.nativeElement.textContent).toBe('John Doe');
  });


});
