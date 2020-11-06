import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
    task = {
      status: '',
      description: '',
      user_id: 0
    };
    submitted = false;
    error = false;
    users = [];
  constructor(private taskService: TaskService, private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

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

  saveTask(): void {
    const data = {
      description: this.task.description,
      status: this.task.status,
      user_id: this.task.user_id
    };
    this.taskService.create(data)
      .subscribe(
        response => {
          this.submitted = true;
        },
        error => {
          this.error = true;
        });
  }

  newTask(): void {
    this.submitted = false;
    this.task = {
      status: '',
      description: '',
      user_id: 1
    };
  }

}


