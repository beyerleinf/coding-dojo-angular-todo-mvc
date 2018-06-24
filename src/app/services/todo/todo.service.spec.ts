import {getTestBed, TestBed} from '@angular/core/testing';

import {TodoItem} from '../../models/todo-item.model';

import {TodoService} from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = getTestBed().get(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service['todos']).toEqual([]);
  });

  describe('addTodo', () => {
    it('should add todo to array', () => {
      const todo: TodoItem = {text: 'SomeTextINeedToDo'};

      service.addTodo(todo);

      expect(service['todos']).toEqual([todo]);
    });
  });

  describe('getTodos', () => {
    it('should return the todos', () => {
      const todos: TodoItem[] = [{text: 'SomeTextINeedToDo'}];

      service['todos'] = todos;

      const result = service.getTodos();

      expect(result).toEqual(todos);
    });
  });
});
