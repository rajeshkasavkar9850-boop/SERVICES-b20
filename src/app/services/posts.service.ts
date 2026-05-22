import { Injectable } from "@angular/core";
import { Ipost } from "../models/posts";


@Injectable({
  providedIn : 'root'
})

export class PostsService {
    postsArr : Array<Ipost> = [
  {
    userId: 1,
    id: 101,
    title: 'Angular Signals',
    body: 'Angular Signals improve reactive state management.'
  },
  {
    userId: 2,
    id: 102,
    title: 'RxJS Basics',
    body: 'RxJS helps handle asynchronous operations in Angular.'
  },
  {
    userId: 3,
    id: 103,
    title: 'TypeScript Guide',
    body: 'TypeScript provides strong typing for JavaScript applications.'
  },
  {
    userId: 4,
    id: 104,
    title: 'Bootstrap UI',
    body: 'Bootstrap helps create responsive user interfaces quickly.'
  },
  {
    userId: 5,
    id: 105,
    title: 'Angular Services',
    body: 'Services are used for reusable business logic and API calls.'
  },
  {
    userId: 6,
    id: 106,
    title: 'Dependency Injection',
    body: 'Dependency Injection is a core concept in Angular framework.'
  },
  {
    userId: 7,
    id: 107,
    title: 'Reactive Forms',
    body: 'Reactive forms provide scalable form handling in Angular.'
  },
  {
    userId: 8,
    id: 108,
    title: 'Angular Pipes',
    body: 'Pipes transform data directly inside Angular templates.'
  },
  {
    userId: 9,
    id: 109,
    title: 'Routing Module',
    body: 'Angular routing enables navigation between components.'
  },
  {
    userId: 10,
    id: 110,
    title: 'MEAN Stack',
    body: 'MEAN Stack consists of MongoDB, Express, Angular, and Node.js.'
  },
  {
  userId: 11,
  id: 111,
  title: 'Angular Directives',
  body: 'Directives are used to change DOM behavior dynamically.'
}

];

fetchPost (): Array<Ipost>{
    // API call to fetch POSTS data from Backend(DB)
    return this.postsArr
}

removePost(id: number){
  //API call to remove post from DB(postsArr)
  let GET_INDEX = this.postsArr.findIndex(p => p.id === id)
  this.postsArr.splice(GET_INDEX,1)

}

createPost(post:Ipost){
  //API call to create new post in DB
  this.postsArr.push(post)
}
}
