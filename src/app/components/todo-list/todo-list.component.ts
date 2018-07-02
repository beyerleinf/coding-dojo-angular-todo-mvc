import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {TodoItem} from '../../models/todo-item.model';

@Component(
    {selector: 'app-todo-list', templateUrl: './todo-list.component.html', styleUrls: ['./todo-list.component.css']})
export class TodoListComponent implements OnInit {
  @Input() items: TodoItem[];

  @Output() delete: EventEmitter<string>;

  @Output() update: EventEmitter<{id: string, state: boolean}>;

  constructor() {
    this.delete = new EventEmitter();
    this.update = new EventEmitter();
  }

  ngOnInit() {}

  updateItem(id: string, state: boolean): void {
    this.update.emit({id, state});
  }
}
