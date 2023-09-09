import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAnimationsComponent } from './todo-animations.component';

describe('TodoAnimationsComponent', () => {
  let component: TodoAnimationsComponent;
  let fixture: ComponentFixture<TodoAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
