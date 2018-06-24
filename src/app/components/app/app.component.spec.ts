import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from '../../modules';
import {TodoService} from '../../services/todo/todo.service';
import {InputComponent} from '../input/input.component';
import {TodoListComponent} from '../todo-list/todo-list.component';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, InputComponent, TodoListComponent],
      imports: [MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    todoService = getTestBed().get(TodoService);

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('addItem', () => {
    it('should call addTodo of TodoService', () => {
      const text: string = 'SomeText';
      const spy = spyOn(todoService, 'addTodo');

      component.addItem(text);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith({text});
    });

    it('should call getTodos of TodoService', () => {
      const text: string = 'SomeText';
      const spy = spyOn(todoService, 'getTodos');

      component.addItem(text);

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('getTodos', () => {
    it('should call getTodos of TodoService', () => {
      const spy = spyOn(todoService, 'getTodos');

      component.getTodos();

      expect(spy).toHaveBeenCalled();
    });
  });
});
