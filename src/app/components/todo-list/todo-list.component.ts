import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Itodo } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todo.service';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
 todosArr : Array<Itodo> = []
  constructor(
    private _todoService : TodosService,
    private _matDialog : MatDialog,
    private _snackBar : SnackbarService
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
   
  onRemove(RemoveId : string){
    let Config = new MatDialogConfig()
    Config.width = '350px';
    Config.disableClose = true;
    Config.data = `Are you sure, you want to remove the TodoItem With Id${RemoveId} ?`
    let matRef = this._matDialog.open(GetConfirmComponent, Config)
    matRef.afterClosed()
       .subscribe((getConfirm) =>{
        if(getConfirm ){
          //API CALL
          this._todoService.removeTodo(RemoveId)
          .subscribe({
            next : res =>{
              console.log(res)
              this._snackBar.openSnackBar(res.msg)
            },
            error : err =>{
              console.log(err)
            }

          })
        }
       }) 
  }
}
