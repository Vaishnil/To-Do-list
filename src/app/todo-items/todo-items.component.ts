import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> =new EventEmitter ();
  @Output() todoCheckbox: EventEmitter<Todo> =new EventEmitter ();
  todos: any;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo :Todo){
    this.todoDelete.emit(todo);
    console.log("but was clicked");
  }
  onCheckboxClick(todo: Todo | undefined){
    this.todoCheckbox.emit(todo);
  }
}
