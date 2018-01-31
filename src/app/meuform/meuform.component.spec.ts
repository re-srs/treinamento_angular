import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuformComponent } from './meuform.component';

describe('MeuformComponent', () => {
  let component: MeuformComponent;
  let fixture: ComponentFixture<MeuformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
