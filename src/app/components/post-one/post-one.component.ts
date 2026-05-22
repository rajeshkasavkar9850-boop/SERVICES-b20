import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';




@Component({
  selector: 'app-post-one',
  templateUrl: './post-one.component.html',
  styleUrls: ['./post-one.component.scss']
})
export class PostOneComponent implements OnInit {
  postsArr : Array<Ipost> = []
// private postsService = new PostsService()
  constructor(
 private postsService : PostsService
  ) {}

  ngOnInit(): void {
    this.postsArr = this.postsService.fetchPost()
  }

  onRemove(id:number){
    console.log(id)
    this.postsService.removePost(id)
  }

}
