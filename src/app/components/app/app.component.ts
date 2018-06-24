import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../models/todo-item.model';
import {TodoService} from '../../services';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit {
  newItemText: string = '';

  todos: TodoItem[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  addItem(text: string): void {
    this.todoService.addTodo({text});
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }
}
