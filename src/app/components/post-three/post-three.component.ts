import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-three',
  templateUrl: './post-three.component.html',
  styleUrls: ['./post-three.component.scss']
})
export class PostThreeComponent implements OnInit {
  postsArr : Array<Ipost> = []
// private postsService = new PostsService()

  constructor(
     private postsService : PostsService
  ) { }

  ngOnInit(): void {
    this.postsArr = this.postsService.fetchPost()
  }

}
