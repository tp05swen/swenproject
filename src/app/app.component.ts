import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { AuthService } from './auth.service';

export var loggedin:string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title =  'Sunny Ville';
  loggedin: any;
  isadmin= false;
  login = 0;
  
  posts: any = [];
  constructor(private postsService: PostsService, private auth: AuthService) {
  // Retrieve posts from the API
  this.postsService.getAllPosts().subscribe(posts => {
  this.posts = posts;
  });
  }
  ngOnInit() {
    if(this.auth.isLoggedIn())
    {
      this.loggedin = this.auth.getUser();
      this.login += 1;
    }
    else {
      this.loggedin = "Not Logged In"
      this.login == 0;

    }
    this.isAdmin();
  }

  changeStatus() {
    this.loggedin = this.auth.getUser();
  }

  isAdmin(){
  this.isadmin =  this.auth.isAdmin();
}
}