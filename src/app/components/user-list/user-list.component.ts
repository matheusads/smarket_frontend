import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any;
  tasks: any;
  currentUser = null;
  currentIndex = -1;
  deleted = false;
  message = '';

  constructor(private userService: UserService,
              private taskService: TaskService) { }

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data.results;
        },
        error => {
          console.log(error);
        });
  }

  setActiveUser(user, index): void {
    this.currentUser = user;
    this.currentIndex = index;
  }

  getTasksByUser(user): void {
    this.taskService.getByUser(user.id)
      .subscribe(
        data => {
          this.tasks = data;
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(user): void {
    this.userService.delete(user.id).
      subscribe(
        () => {
          this.deleted = true;
          this.message = "User Deleted";
          this.retrieveUsers();
          this.currentUser = null;
        }, 
        error => {
        console.log(error);
      });
  }

}
