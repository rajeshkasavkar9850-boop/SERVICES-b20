import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/models/students';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
studentsArr  : Array<Istudent> = []
  constructor(
    private _studentsService : StudentsService,
   private _snackBar : SnackbarService
  ) { }

  ngOnInit(): void {
   this.getStudents()
  }
  getStudents() {
     this._studentsService.fetchStudents()
    .subscribe({
      next : data =>{
        console.log(data)
        this.studentsArr = data
      },
      error : err => {
        console.log(err)
        this._snackBar.openSnackBar(err)
      }
    })
  }

  onRemove(id:string){
  
  }
}
