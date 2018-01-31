import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaFormDebugComponent } from './tarefa-form-debug.component';

describe('TarefaFormDebugComponent', () => {
  let component: TarefaFormDebugComponent;
  let fixture: ComponentFixture<TarefaFormDebugComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaFormDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaFormDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
