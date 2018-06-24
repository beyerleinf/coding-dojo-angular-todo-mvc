import {Injectable} from '@angular/core';
import {TodoItem} from '../../models/todo-item.model';

@Injectable({providedIn: 'root'})
export class TodoService {
  private todos: TodoItem[];

  constructor() {
    this.todos = [];
  }

  addTodo(todo: TodoItem): void {
    this.todos.push(todo);
  }

  getTodos(): TodoItem[] {
    return this.todos;
  }
}
