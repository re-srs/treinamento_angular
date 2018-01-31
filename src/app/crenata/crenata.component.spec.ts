import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrenataComponent } from './crenata.component';

describe('CrenataComponent', () => {
  let component: CrenataComponent;
  let fixture: ComponentFixture<CrenataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrenataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
