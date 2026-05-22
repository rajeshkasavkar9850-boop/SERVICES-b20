import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ipost } from 'src/app/models/posts';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
 userIdsArr = [1,2,3,4,5,6,7,8,9,10,11]
 @ViewChild('title') title! : ElementRef
  @ViewChild('body') body! : ElementRef
   @ViewChild('userId') userId! : ElementRef
  constructor(
    private postsService : PostsService
  ) { }

  ngOnInit(): void {
  }

  onPostAdd(){
 let newPost : Ipost = {
  title : this.title.nativeElement.value,
  body : this.body.nativeElement.value,
  userId : this.userId.nativeElement.value,
  id : Date.now()
 }
 console.log(newPost)

 this.postsService.createPost(newPost)  
  }

}
