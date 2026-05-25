import { Istudent } from "./students";



export interface Itodo{
    todoId: string;
    todoItem: string;
}

export interface IRes<T> {
     msg: string;
    data: T;
}



export interface ItodosRes {
     msg: string;
    data: Itodo;
}

export interface IstdsRes {
     msg: string;
    data: Istudent;
}