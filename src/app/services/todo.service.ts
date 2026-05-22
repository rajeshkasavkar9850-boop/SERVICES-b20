import { Injectable } from "@angular/core";
import { Itodo, ItodosRes } from "../models/todos";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class TodosService {
  todosArr:Array<Itodo> = [
  {
    todoId: '101',
    todoItem: 'Learn Angular Services'
  },
  {
    todoId: '102',
    todoItem: 'Practice RxJS'
  },
  {
    todoId: '103',
    todoItem: 'Build CRUD App'
  },
  {
    todoId: '104',
    todoItem: 'Understand Dependency Injection'
  },
  {
    todoId: '105',
    todoItem: 'Learn Angular Routing'
  },
  {
    todoId: '106',
    todoItem: 'Practice Reactive Forms'
  },
  {
    todoId: '107',
    todoItem: 'Use Bootstrap in Angular'
  },
  {
    todoId: '108',
    todoItem: 'Create Custom Pipes'
  },
  {
    todoId: '109',
    todoItem: 'Learn Angular Material'
  },
  {
    todoId: '110',
    todoItem: 'Prepare for Angular Interview'
  }
];

//Module >> httpModule >> GET , POST, PATCH, PUT, DELETE >> Return Observable
constructor(private _http :HttpClient){}
// multiple todos


fetchTodos():Observable<Itodo[]>{
    // API call to fetch todo data from DB

    return of (this.todosArr)
}

fetchMsg():Observable<string>{
    return of ('Hello Angular')
}

fetchUserId():Observable<number>{
    return of (125)
}
//get single todo 

// add new todo  
  addTodo(todo:Itodo):Observable<ItodosRes>{
    // API call to add new data in DB
     this.todosArr.push(todo)

     let res ={
      msg : `New todo item with id ${todo.todoId} create successfully`,
      data : todo
     }
     return of(res)

  }
// remove todo

// update todo


}