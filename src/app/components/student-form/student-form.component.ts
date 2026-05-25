import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from 'src/app/models/students';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
isEditModule : boolean = false;
@ViewChild('stdForm') stdForm! : NgForm;
  constructor(
    private _studentService : StudentsService,
    private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onStudentSubmit(){
   if(this.stdForm.valid){
    let stdObj:Istudent = {
      ...this.stdForm.value,
      stdId : crypto.randomUUID()
    }
    this._studentService.createStudent(stdObj)
    .subscribe({
      next : res =>{
      this._snackBar.openSnackBar(res.msg)
      this.stdForm.reset()
      },
      error : err =>{
       this._snackBar.openSnackBar(err)
      }
    })
   }
  }

}
