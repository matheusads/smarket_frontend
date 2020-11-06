import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = {'username': ''};
  submitted = false;
  error = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      username: this.user.username
    }
    this.userService.create(data)
      .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          this.error = true;
        });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      username: ''
    };
  }

}
