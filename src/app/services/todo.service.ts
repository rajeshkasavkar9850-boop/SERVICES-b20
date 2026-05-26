import { Injectable } from "@angular/core";
import { IRes, Itodo, ItodosRes } from "../models/todos";
import { HttpClient } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})

export class TodosService {
  // addTodo(New_TODO: Itodo) {
  //   throw new Error('Method not implemented.');
  // }
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

editTodoSub$ : Subject<Itodo> = new Subject<Itodo>()

//Module >> httpModule >> GET , POST, PATCH, PUT, DELETE >> Return Observable
constructor(private _http :HttpClient){}
// multiple todos


fetchTodos():Observable<Itodo[]>{
    // API call to fetch todo data from DB

    return of (this.todosArr)
}

// fetchMsg():Observable<string>{
//     return of ('Hello Angular')
// }

// fetchUserId():Observable<number>{
//     return of (125)
// }
//get single todo 

// add new todo  
addTodo(todo:Itodo): Observable<ItodosRes>{
this.todosArr.push(todo)
let res = {
  msg : `New todo item with id ${todo.todoId} created successfully`,
  data : todo
}
return of (res)
}
// remove todo
 removeTodo(id: string): Observable<IRes<Itodo>> {
        let GET_INDEX = this.todosArr.findIndex(t => t.todoId === id)
        let RemoveTodo = this.todosArr.splice(GET_INDEX, 1);

        return of({
            msg: `The Todo Item With ${id} is removed Successfully !!!`,
            data: RemoveTodo[0]
        })
    }
// update todo
updateTodo(updatedTodo:Itodo):Observable<ItodosRes>{
 let GET_INDEX = this.todosArr.findIndex(t => t.todoId === updatedTodo.todoId)
 this.todosArr[GET_INDEX] = updatedTodo

  return of({
    msg : `The todo item with id ${updatedTodo.todoId} is updated successfully!!!`,
    data : updatedTodo
  })
}

}