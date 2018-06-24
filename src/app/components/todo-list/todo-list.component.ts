import {Component, Input, OnInit} from '@angular/core';

import {TodoItem} from '../../models/todo-item.model';

@Component(
    {selector: 'app-todo-list', templateUrl: './todo-list.component.html', styleUrls: ['./todo-list.component.css']})
export class TodoListComponent implements OnInit {
  @Input() items: TodoItem[];

  constructor() {}

  ngOnInit() {}
}
