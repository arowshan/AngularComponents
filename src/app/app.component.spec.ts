import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { DoublePipe } from './pipes/double.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientService } from './http-client/http-client.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MatIconModule } from '@angular/material/icon';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        // DemoComponent,
        // DoublePipe,
      ],
      providers: [
        {provide: Router,  useClass: AppRoutingModule }
      ],
      imports:[
        // HttpClientModule,
        RouterTestingModule,
        MatIconModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
