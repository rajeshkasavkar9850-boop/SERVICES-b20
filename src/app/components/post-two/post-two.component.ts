import { Component, OnInit } from '@angular/core';
import { Ipost } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-two',
  templateUrl: './post-two.component.html',
  styleUrls: ['./post-two.component.scss']
})
export class PostTwoComponent implements OnInit {
  postsArr : Array<Ipost> = []
// private postsService = new PostsService()

  constructor(
    private postsService : PostsService
  ) { }

  ngOnInit(): void {
    this.postsArr = this.postsService.fetchPost()
  }

}
