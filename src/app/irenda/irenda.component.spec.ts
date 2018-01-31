import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrendaComponent } from './irenda.component';

describe('IrendaComponent', () => {
  let component: IrendaComponent;
  let fixture: ComponentFixture<IrendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
