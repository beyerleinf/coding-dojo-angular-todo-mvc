import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {TodoItem} from '../../models/todo-item.model';

@Injectable({providedIn: 'root'})
export class TodoService {
  constructor(private http: HttpClient) {}

  addTodo(todo: TodoItem): Observable<{}> {
    return this.http.post('/api/v1/todos', todo);
  }

  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('/api/v1/todos');
  }

  deleteTodo(id: string): Observable<{}> {
    return this.http.delete(`/api/v1/todos/${id}`);
  }

  updateTodo(id: string, state: boolean): Observable<{}> {
    return this.http.patch(`/api/v1/todos/${id}/done`, {state});
  }

  /*

  GET /api/v1/todos
  POST /api/v1/todos
  DELETE /api/v1/todos/:id
  PATCH /api/v1/todos/:id/done {state: boolean}
  */
}
