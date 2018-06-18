import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserResponse {
  login: string,
  bio: string,
  company: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<UserResponse>('https://api.github.com/users/sinakeang')
      .subscribe(data => {
        console.log("User Login: " + data.login);
        console.log("User Bio: " + data.bio);
        console.log("User Company: " + data.company);
      })
  }
}
