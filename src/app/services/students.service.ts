import { Injectable } from '@angular/core';
import { Istudent } from '../models/students';
import { Observable, of } from 'rxjs';
import { IRes } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

 stdArr:Array<Istudent> = [
  {
    fname : 'Rajesh',
    lname : 'Kasavkar',
    email : 'rajesh@gmail.com',
    contact : 9876543210,
    stdId : 'std101',
    isActive : true
  },

  {
    fname : 'Rahul',
    lname : 'Sharma',
    email : 'rahul@gmail.com',
    contact : 9876543211,
    stdId : 'std102',
    isActive : true
  },

  {
    fname : 'Amit',
    lname : 'Patil',
    email : 'amit@gmail.com',
    contact : 9876543212,
    stdId : 'std103',
    isActive : false
  }
];

// fetchStudent

fetchStudents(): Observable<Istudent[]>{
  return of (this.stdArr)
 
}

// fetchStudentById


//  create student
 createStudent(student:Istudent):Observable <IRes<Istudent>>{
   this.stdArr.push(student)
  return of({
    msg : `The student with id ${student.stdId} added successfully !!`,
    data : student
  })
 }
//  updateStudent

//  removeStudent
removeStd(id:string):Observable<IRes<Istudent>>{
 let GET_INDEX = this.stdArr.findIndex(s => s.stdId === id)
 let removedStd = this.stdArr.splice(GET_INDEX,1)
 return of({
  msg: `The student with id ${id} remove successfully!!`,
  data :removedStd[0]
 })
}

  constructor() { }
}
