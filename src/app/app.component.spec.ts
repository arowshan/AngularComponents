import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DoublePipe } from './pipes/double.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientService } from './http-client/http-client.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DemoComponent,
        DoublePipe,
      ],
      imports:[HttpClientModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
