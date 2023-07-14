import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcExampleComponent } from './wc-example.component';

describe('WcExampleComponent', () => {
  let component: WcExampleComponent;
  let fixture: ComponentFixture<WcExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WcExampleComponent]
    });
    fixture = TestBed.createComponent(WcExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
