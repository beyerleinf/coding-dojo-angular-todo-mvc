import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../models/todo-item.model';
import {TodoService} from '../../services';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {
  newItemText: string = '';

  todos: TodoItem[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  addItem(text: string): void {
    this.todoService.addTodo({name: text, state: false}).subscribe(() => {
      this.getTodos();
    });
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((res) => {
      this.todos = res;
    });
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.getTodos();
    });
  }

  updateTodo(event: {id: string, state: boolean}): void {
    this.todoService.updateTodo(event.id, event.state).subscribe(() => {
      this.getTodos();
    });
  }
}
