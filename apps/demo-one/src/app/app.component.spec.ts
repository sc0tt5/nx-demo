import { HttpClientModule } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { DemoOneFeatureShellModule } from '@nx-toh/demo-one/feature/shell';
import { LoadingIndicatorModule } from '@nx-toh/shared/ui-core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [
          HttpClientModule,
          // AppRoutingModule,
          BrowserAnimationsModule,
          BrowserModule,
          HttpClientModule,
          DemoOneFeatureShellModule,
          LoadingIndicatorModule,
          RouterModule
        ]
      }).compileComponents();
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
