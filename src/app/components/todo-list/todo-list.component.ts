import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
 todosArr : Array<Itodo> = []
  constructor(
    private _todoService : TodosService
  ) { }

  ngOnInit(): void {
    this._todoService.fetchTodos()
    .subscribe({
      next : data => {
       this.todosArr = data
      },
      error : err => {
        console.log(err);
      }
    })

   
  }

}
