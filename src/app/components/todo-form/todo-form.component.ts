import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/models/todos';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TodosService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
isInEditMode : boolean = false
editTodo ! : Itodo
@ViewChild('todoForm') todoForm !: NgForm
  constructor(
    private _todosService : TodosService,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
    this.onTodoPatch()
  }

  // onTodoSubmit(todoForm: NgForm){
  // console.log(todoForm.value);
  // }

   onTodoSubmit(){
    if(this.todoForm.valid){
     let New_TODO:Itodo = {...this.todoForm.value,
       todoId : crypto.randomUUID()
      }
  // ============OR============//
    //  New_TODO.todoId = crypto.randomUUID()

     console.log(New_TODO)
     this.todoForm.reset()
     this._todosService.addTodo(New_TODO)
         .subscribe({
          next : data =>{
            this._snackBar.openSnackBar(data.msg)
          },
          error : err => {
            console.log(err)
          }
         })
    }
  }

  onTodoPatch(){
    this._todosService.editTodoSub$.subscribe({
      next : data =>{
        console.log(data);
         this.editTodo = data; 
        this.isInEditMode = true;
        this.todoForm.form.patchValue(data)
      }
    })
  }

  onUpdate(){
  if(this.todoForm.valid){
    let UPDATED_OBJ:Itodo = {
      ...this.todoForm.value,
      todoId : this.editTodo.todoId
    }
    console.log(UPDATED_OBJ);
    //API call 
    this._todosService.updateTodo(UPDATED_OBJ)
    .subscribe({
      next : res => {
       this._snackBar.openSnackBar(res.msg)
       this.todoForm.reset()
       this.isInEditMode = false;
      },
      error : err => {
        this._snackBar.openSnackBar(err)
      }
    })
  }
  }
}
